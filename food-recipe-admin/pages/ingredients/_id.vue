<template>
  <div class="container mt-5">
    <v-card>
      <v-card-title>Update Ingredient

      </v-card-title>
      <v-row>
        <v-col cols="12">
            <v-card-text class="pb-0">
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Name
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="ingredients.name"
                      :placeholder="Name"
                      v-bind="input_option"
                      :rules="[required('name')]"
                      :error-messages="handleError('name')"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label class="custom-label">Description</label>
                    <v-textarea
                      v-bind="input_option"
                      v-model="ingredients.description"
                      :placeholder="Description"
                      rows="3"
                    >
                    </v-textarea>
                  </v-col>
                  <v-col cols="12" class="mb-8">
                    <label class="custom-label">Status *</label>
                    <v-autocomplete
                      v-model="ingredients.status"
                      placeholder="Status"
                      :items="status_options"
                      v-bind="input_option"
                      :rules="[required('status')]"
                    ></v-autocomplete>
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
import edit from '@/js/pages/ingredients/edit.js';
import ingredients from '../../js/pages/ingredients';
export default {
  name: 'edit',
  mixins: [edit],
};
</script>
<style scoped>
  /* .v-card{
    margin-top: 50px;
  } */
</style>
