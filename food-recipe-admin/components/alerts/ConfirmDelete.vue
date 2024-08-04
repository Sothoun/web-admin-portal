<template>
  <v-dialog v-model="dialog" :max-width="options.width" :style="{ zIndex: options.zIndex }" @keydown.esc="cancel">
    <v-card>
      <v-card-title class="text-h6">
        <!--        <v-icon left>mdi-alert-circle-outline</v-icon>-->
        Delete
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text class="text-center py-2">
        <v-icon size="50" color="red">mdi-delete-empty</v-icon>
        <h4 class="mt-4">Are you sure you want to delete this record?</h4>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>
        <v-btn v-if="!options.noconfirm" outlined @click.native="cancel">Cancel </v-btn>
        <v-btn color="primary" outlined @click.native="agree">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmDlg',
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      options: {
        color: 'grey lighten-3',
        width: 400,
        zIndex: 200,
        noconfirm: false,
      },
    };
  },

  methods: {
    open() {
      this.dialog = true;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.resolve(false);
      this.dialog = false;
    },
  },
};
</script>
