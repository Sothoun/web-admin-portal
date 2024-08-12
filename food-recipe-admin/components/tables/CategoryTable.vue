<template>
  <div id="product-category-table pa-5">
      <div class="contain-search">
          <v-text-field
            v-model="search"
            class="table-search"
            v-bind="input_option"
            placeholder="Search..."
            prepend-inner-icon="mdi-magnify"
            @keyup="onSearch"
            @click:clear="onClearSearch"
          >
          </v-text-field>
          <div class="search-create">
            <v-btn
              class="ml-2"
              outlined
              color="primary"
              :to="'/categories/create'"
            >
              <v-icon left>mdi-plus-circle</v-icon>
              Create
            </v-btn>
          </div>
      </div>
    <v-data-table
      class="data-table"
      :headers="table_options.headers"
      :items="table_options.table_data"
      :options.sync="options"
      :page.sync="table_options.page"
      :items-per-page.sync="table_options.length"
      :server-items-length="table_options.total_items"
      fixed-header
      height="calc(100vh - 230px)"
      @click:row="(item, slot) => slot.select(!slot.isSelected)"
      @page-count="table_options.page_count = $event"
    >

      <template v-slot:item.index="{ item }">
        {{ table_options.table_data.indexOf(item) + 1 + (table_options.page - 1) * table_options.length }}
      </template>

      <template v-slot:item.status="{ item }">
        <v-chip small :color="item.status == 'Active' ? 'primary' : ''">
          <v-icon left small>{{ item.status == 'Active' ? 'mdi-check-circle' : 'mdi-close-circle' }}</v-icon>
          {{ item.status }}
        </v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <div class="table-action-container">
          <v-menu offset-y left>
            <template v-slot:activator="{ attrs, on }">
              <v-btn depressed class="table-button" v-bind="attrs" v-on="on">
                <v-icon color="primary">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list dense nav width="180">
              <v-list-item
                link
                :to="`/categories/${item.id}`"
              >
                <v-list-item-icon>
                  <v-icon size="15">mdi-pencil</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>

              <v-divider class="mb-1"></v-divider>

              <v-list-item @click="deleteData(item.id)">
                <v-list-item-icon>
                  <v-icon size="15">mdi-delete</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>

            </v-list>
          </v-menu>
        </div>
      </template>

      <template v-slot:footer.prepend>
        <v-pagination v-model="table_options.page" :length="table_options.page_count" :total-visible="7"></v-pagination>
      </template>
    </v-data-table>

    <v-divider></v-divider>

    <ConfirmDelete ref="confirm" />
  </div>
</template>

<script>
import ConfirmDelete from '@/components/alerts/ConfirmDelete';

export default {
  components: {
    ConfirmDelete,
  },

  data() {
    return {
      table_options: {
        headers: [
          { text: '#', value: 'index', width: '50px', sortable: false },
          { text: 'Name', value: 'name', width:'300px', align:'center', sortable: true },
          { text: 'Action', value: 'action', width:'20px', align:'left',sortable: false },
        ],
        page: 1,
        length: 50,
        page_count: 0,
        table_data: [],
        total_items: 0,
        url: `http://localhost:8000/categories`,
      },
      options: {},
      search: '',
      show_filter: false,
      inputTimer: '',
      selected: [],
      valid: true,
      file_xlsx: null,
      dialog: false,
      isFilter: false,
    };
  },

  computed: {
    searchInput() {
      return this.search;
    },

    old_filter() {
      return this.$route.query.filter ? JSON.parse(this.$route.query.filter) : null;
    },
  },

  methods: {
    async deleteData(id) {
      if (await this.$refs.confirm.open()) {
        try {
          const token = localStorage.getItem('token')
          const res = await fetch(`http://localhost:8000/categories/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          });

          if (res.ok) {
            this.$toast.success("Category have been delete success!");
            this.getCategoryList();
          }
        } catch (error) {
          this.$toast.error("An error occurred. Please try again.");
        }

      }
    },

    onSearch() {
      if (this.inputTimer) {
        clearTimeout(this.inputTimer);
        this.inputTimer = '';
      }
      this.inputTimer = setTimeout(() => {
        this.getDataFromApi(this.table_options.url, this.search, (this.isFilter = true));
      }, 800);
    },

    onClearSearch() {
      this.search = '';
      this.getDataFromApi(this.table_options.url, this.searchInput);
    },

    async getCategoryList() {
      try {
        const token = localStorage.getItem('token');

        const res = await fetch(`${this.table_options.url}?page=${this.table_options.page}&pageSize=${this.table_options.length}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.ok) {
          const data = await res.json();
          this.table_options.table_data = data.category.data;
          this.table_options.total_items = data.category.total_items; // Assuming your API provides this
          this.table_options.page_count = Math.ceil(this.table_options.total_items / this.table_options.length); // Calculate total pages
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    },
  },

  watch: {
    'table_options.page'(newPage) {
      this.getCategoryList();
    },
    'table_options.length'(newLength) {
      this.getCategoryList();
    }
  },

  created() {
    this.getCategoryList();
  }
};
</script>


<style scoped>
  .data-table {
    background-color: #323232;
  }

  .search-create {
    text-align: right;
    padding: 5px;
  }

  .contain-search {
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
  .table-search{
    border: solid 2px black;
  }
</style>
