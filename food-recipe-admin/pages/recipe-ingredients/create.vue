<template>
  <div class="container mt-5">
    <v-card>
      <v-card-title>Create Recipe Ingredient

      </v-card-title>

            <v-card-text class="pb-0">
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-row>
                  <v-col cols=12>
                    <label class="custom-label label"
                      >Recipe
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>
                    <v-autocomplete
                      v-model="recipeId"
                        placeholder="Select Recipe"
                        :items="recipes"
                        v-bind="input_option"
                        :rules="[required('Recipe')]"
                        :error-messages="handleError('recipeId')"
                        item-text="title"
                        item-value="id"
                      ></v-autocomplete>
                  </v-col>
                  <v-col cols=12>
                    <label class="custom-label label"
                      >Ingredient
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>
                    <v-autocomplete
                      v-model="ingredientId"
                        placeholder="Select Ingredient"
                        :items="ingredients"
                        v-bind="input_option"
                        :rules="[required('Ingredient')]"
                        :error-messages="handleError('ingredientId')"
                        item-text="name"
                        item-value="id"
                      ></v-autocomplete>
                  </v-col>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Unit
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="unit"
                      :placeholder="'Unit'"
                      v-bind="input_option"
                      :rules="[required('Unit')]"
                      :error-messages="handleError('unit')"
                    >
                    </v-text-field>

                  </v-col>
                  <v-col cols="12">
                    <label class="custom-label label"
                      >Quantity
                      <strong
                        class="red--text text--lighten-1"
                        >*</strong
                      >
                    </label>

                    <v-text-field
                      v-model="quantity"
                      :placeholder="'Quantity'"
                      v-bind="input_option"
                      :rules="[required('Quantity')]"
                      :error-messages="handleError('Quantity')"
                    >
                    </v-text-field>

                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>


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
import create from '@/js/pages/recipe-ingredients/create.js';
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
