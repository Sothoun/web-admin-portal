<template>
  <v-dialog v-model="dialog" :max-width="options.width" :style="{ zIndex: options.zIndex }" @keydown.esc="cancel">
    <v-card>
      <v-card-title>
        <v-icon v-if="iconTitle" left>{{ iconTitle }}</v-icon>
        {{ title }}
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text class="text-center py-2">
        <v-icon v-if="icon" size="50" color="secondary">{{ icon }}</v-icon>
        <h4 v-show="message" class="mt-4">{{ message }}</h4>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>
        <v-btn v-if="!options.confirm" outlined color="secondary" @click.native="cancel">{{
          btnCancel
        }}</v-btn>
        <v-btn color="primary" outlined @click.native="agree">{{ btnConfirm }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ConfirmActionDialog',
  props: {
    title: {
      required: true,
      type: String,
    },
    iconTitle: {
      required: false,
      default: '',
      type: String,
    },
    icon: {
      required: false,
      default: '',
      type: String,
    },
    message: {
      required: true,
      type: String,
    },
    btnCancel: {
      required: false,
      default: 'Cancel',
      type: String,
    },
    btnConfirm: {
      required: false,
      default: 'Yes',
      type: String,
    },
  },
  data() {
    return {
      dialog: false,
      resolve: null,
      reject: null,
      options: {
        color: 'grey lighten-3',
        width: 400,
        zIndex: 200,
        confirm: false,
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
