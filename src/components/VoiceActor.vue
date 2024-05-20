<template>
  <v-card class="mx-auto search-item" max-width="344" rounded="10%">
    
    <div class="picture-container">
      <slot name="picture" ></slot>
    </div>

    <v-card-title> 
      <slot name="name"></slot>
    </v-card-title>
    <div class="audio-player">
      <slot name="audio" ></slot>
    </div>
    <v-card-actions>

      <v-btn block
        @click="show = !show"
      >Relevant summary</v-btn>
      <!-- <v-card-text> Relevant summary </v-card-text>
      <v-spacer></v-spacer>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn> -->

    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <slot name="summary"></slot>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
</template>

<style scoped>

.search-item {
  flex-basis: calc(100% / 3); /* Distribute items equally in three columns */
  text-align: center; /* Align item content */
  margin: 1%
}
.picture-container{
    display: inline-flex;
    margin: 2%;
    width: 200px;
    height: 200px;
}
</style>

<script>
  export default {
    data: () => ({
      show: false,
    })
  }
</script>
