import Vue from 'vue';
import validations from '@/utils/validations';

const global = {
  data() {
    return {
      input_option: {
        outlined: true,
        dense: true,
        hideDetails: 'auto',
        clearable: false,
        clearIcon: 'mdi-close-circle-outline',
      },
      table_item_per_page: [15, 50, 100, 200],
      ...validations,
      status_options: ['Active', 'Inactive'],
      is_scroll: false,
      isSubmitting: false,
    };
  },

  computed: {


  },

  methods: {
    objectLength(object) {
      if (object == {} || object == null || object == '' || object == undefined) {
        return 0;
      }
      return Object.keys(object).length;
    },
    // call data table
    getDataFromApi(url, search, filter, isFilter) {
      this.getDataTableData(url, search, filter, isFilter).then((data) => {
        this.table_options.table_data = data.items;
        this.table_options.total_items = data.total;
      });
    },

    // data table
    getDataTableData(url, search, filter, isFilter = false) {
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;

        let param = '';

        if (filter) {
          param = Object.keys(filter)
            .map(function (key) {
              let val = filter[key] != null ? filter[key] : '';
              return key + '=' + val;
            })
            .join('&');
        }

        const axiosSource = this.$axios.CancelToken.source();
        this.request = { cancel: axiosSource.cancel, msg: 'Loading...' };

        let items = [];
        let total = 0;

        this.$axios
          .$get(
            `${process.env.API_SECRET_PREFIX}/${url}?page=${isFilter ? 1 : page}&per_page=${itemsPerPage}&search=${
              search ? search : ''
            }${param ? '&' + param : ''}`,
            {
              cancelToken: axiosSource.token,
            }
          )
          .then((response) => {
            if (response) {
              this.$router.push({
                query: {
                  page: page,
                  length: itemsPerPage == -1 ? response.meta.total : itemsPerPage,
                  search: this.search,
                  filter: filter ? JSON.stringify(filter) : '',
                },
              });

              items = response.data;
              total = response.meta.total;

              if (sortBy.length === 1 && sortDesc.length === 1) {
                items = items.sort((a, b) => {
                  let sortA = a[sortBy[0]];
                  let sortB = b[sortBy[0]];

                  if (sortDesc[0]) {
                    if (sortA < sortB) return 1;
                    if (sortA > sortB) return -1;
                    return 0;
                  } else {
                    if (sortA < sortB) return -1;
                    if (sortA > sortB) return 1;
                    return 0;
                  }
                });
              }
              resolve({ items, total });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },

    // covert data filter to string
    generateFilterString(dataFilter) {
      let filterString = '';
      if (dataFilter) {
        Object.keys(dataFilter).forEach((key) => {
          if (dataFilter[key].value && !['Warehouse', 'Date From', 'Date To', 'Date'].includes(dataFilter[key].label)) {
            filterString += `${dataFilter[key].label}:${dataFilter[key].value}, `;
          }
        });
      }
      return filterString;
    },

    isSuperAdmin() {
      let user = this.$auth.user.data;
      if (!user) {
        return false;
      }

      return user.roles.some((item) => item.name === 'Administrator');
    },

    isDeveloper() {
      let user = this.$auth.user.data;
      if (!user) {
        return false;
      }

      return user.roles.some((item) => item.name === 'Developer');
    },







    generalInfo(name) {
      let general_info = [
        {
          app_name: null,
          app_logo: null,
        },
      ];

      general_info = this.$store.state.setup_system.general_info[name];

      return general_info;
    },


    hasErrorFor(field) {
      return !!this.error_messages[field];
    },

    handleError(field) {
      if (this.hasErrorFor(field)) return this.error_messages[field][0];
    },

    encode(data) {
      return Buffer.from(JSON.stringify(data)).toString('base64');
    },

    decode(data) {
      return Buffer.from(JSON.stringify(data), 'base64').toString();
    },

    goBack() {
      this.$router.back(-1);
    },

    cleanObject(obj) {
      for (const propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
          delete obj[propName];
        }
      }
      return obj;
    },

    objectCheckValue(obj) {
      let data = Object.keys(obj).filter(function (key) {
        return obj[key].value;
      });

      return data.length > 0;
    },




    //Preview Image
    async preview(e, model, previewUrl) {
      if (previewUrl) {
        this[previewUrl] = model ? URL.createObjectURL(model) : require('~/assets/images/logo/logo.avif');
      }
    },

    //Preview Video
    async previewVideo(e, model, previewUrl) {
      if (previewUrl) {
        this[previewUrl] = model ? URL.createObjectURL(model) : '';
      }
    },

    handleScroll() {
      this.is_scroll = window.scrollY > 0;
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
  },

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};

Vue.mixin(global);
