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
          controls :src="encodeURIComponent(voiceActor.relevant_sample.file)">
          <!-- create function to transform url and try -->
          <!-- https://api.sandbox.voice123.com/demo27794761_52693.mp3 -->
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
      flex: 1 1 calc(33.333% - 10px); /* 1/3 width, to make it 3 per row */
      margin: 5px;
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