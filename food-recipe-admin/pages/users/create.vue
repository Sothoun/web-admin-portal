<template>
  <div class="container mt-5">
    <v-card>
      <v-card-title>Create Users

      </v-card-title>
      <v-row>
        <v-col cols="12">
            <v-card-text class="pb-0">
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Username
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="users.username"
                      :placeholder="'Username'"
                      v-bind="input_option"
                      :rules="[required('Username')]"
                      :error-messages="handleError('name')"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Email
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="users.email"
                      :placeholder="'Email'"
                      v-bind="input_option"
                      :rules="[required('Email')]"
                      :error-messages="handleError('email')"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Password
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="users.password"
                      :placeholder="'Password'"
                      v-bind="input_option"
                      :rules="[required('Password')]"
                      :type="show_password ? 'text' : 'password'"
                      :append-icon="show_password ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show_password = !show_password"
                      :error-messages="handleError('password')"
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
        </v-col>
      </v-row>

    </v-card>
    <v-footer app fixed inset class="action-footer">
      <v-row>
        <v-col cols="12" class="text-right">
          <v-btn @click="goBack" :disabled="isDataLoading" class="action" color="secondary">
            <v-icon left>mdi-chevron-left-circle</v-icon>
            {{ 'Back'}}</v-btn
          >
          <v-btn class="action ml-2" color="primary" @click="submit" :disabled="isDataLoading">
            <v-icon left>mdi-content-save</v-icon>
            {{ 'Save' }}</v-btn
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
import create from '@/js/pages/users/create.js';
export default {
  name: 'create',
  mixins: [create],
};
</script>
<style scoped>
  /* .v-card{
    margin-top: 50px;
  } */
</style>
