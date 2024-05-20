<script setup lang="ts">
import { ref, type PropType } from 'vue';
import type { VoiceActorI } from '@/interfaces';

defineProps({
  voiceActor: {
    type: Object as PropType<VoiceActorI>,
    required: true,
  },
});


const show = ref(false);
</script>

<template>
    <v-card class="mx-auto card-item" max-width="344" rounded="10%">
      <div class="picture-container " > 
        <v-img
          height="200px" width="200px"
          cover
          class="profile-picture"
          :src="voiceActor.user.picture_small" alt="Profile Picture">
        </v-img>
      </div>
  
      <v-card-title class="title-center"> 
        <a :href="'https://voice123.com/'+voiceActor.user.username" target="_blank" rel="noopener">{{ voiceActor.user.name }}</a>
      </v-card-title>
      <div class="audio-player audio-center">
        <audio class="audio-center" 
          v-show="voiceActor.relevant_sample?.file" controls :src="encodeURIComponent(voiceActor.relevant_sample.file)">
          <a :href="encodeURIComponent(voiceActor.relevant_sample.file)">Download audio</a>
        </audio>
      </div>
      <v-card-actions>
  
        <v-btn block
          @click="show = !show"
        >Relevant summary</v-btn>
  
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
  
          <v-card-text>
            {{voiceActor.summary}}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    
  </template>
  
  <style scoped>
    .profile-picture {
      border: 3px solid #ccc;
      border-radius: 50%;
      background-color: aliceblue;
    }
    .card-item{
      flex: 1 1 calc(33.333% - 10px); /* Los elementos ocupan un tercio del ancho del contenedor menos un pequeño margen */
      margin: 5px; /* Espacio entre elementos */
      box-sizing: border-box;
      margin-top: 2%; 
    }
    .picture-container{
      display: flex;
      margin: 2% auto;
      width: 200px;
      height: 200px;
    }
    .title-center{
      justify-content: center;
      display: flex;
    }
    .audio-center{
      display: flex;
      margin: auto;
    }
</style>