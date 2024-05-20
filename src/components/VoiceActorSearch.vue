<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import VoiceActor from './VoiceActor.vue'
import VoiceActorI from '../models/VoiceActorInterfaces';


import {VoiceActorService} from '../core/services/VoiceActorService';

// definitions
const voiceActorService = new VoiceActorService();

// business
var voiceActors: VoiceActorI[] = []; 

const searchParams: VoiceActorSearchI = { page: 1, keywords: 'woman', service: 'voice_over' };


voiceActorService.getVoiceActorByKeywordsPaginated(searchParams)
    .then((result: VoiceActorI[]) => {
        console.log('Voice Actors:', result);
        voiceActors = result;
    })
    .catch((error: Error) => {
        console.error('Error fetching voice actors:', error);
    });

    //encodeURIComponent()
</script>

<template >
<div class="search-container">
  <VoiceActor>
    <template #profile-picture>
      <img src="https://v1-media.s3.amazonaws.com:443/sandbox/pics/users/3976/r_uh17F.jpg" alt="">
    </template>
    <template #audio>
      
          https://voice123.com/embed.html?id=67793
    </template>

    <template #name>
      <a href="https://voice123.com/davidkulle" target="_blank" rel="noopener">
        David Kulleeee
      </a>
    </template>

    <template #summary>
      Such a Voice VIP program; Such a Voice Guru program; Yale School of Music - Master of Music in Voice; 
    </template>

  </VoiceActor>
  <VoiceActor>
    <template #profile-picture>
      <img src="https://v1-media.s3.amazonaws.com:443/sandbox/pics/users/3976/r_uh17F.jpg" alt="">
    </template>
    <template #audio>
      
          https://voice123.com/embed.html?id=67793
    </template>

    <template #name>
      <a href="https://voice123.com/davidkulle" target="_blank" rel="noopener">
        David Kulleeee
      </a>
    </template>

    <template #summary>
      Such a Voice VIP program; Such a Voice Guru program; Yale School of Music - Master of Music in Voice; 
    </template>

  </VoiceActor>
    
  <VoiceActor v-for="(actor, index) in voiceActors" :key="index">
    <template #picture>
      <v-img
        height="200px" width="200px"
        cover
        class="profile-picture"
        :src="actor.user.picture_small" alt="Profile Picture">
      </v-img>
    </template>
    <template #audio>
      <!-- Use actor.audioUrl to render audio content -->
      <audio v-show="actor.relevant_sample?.file" controls :src="encodeURIComponent(actor.relevant_sample.file)">
        <a :href="encodeURIComponent(actor.relevant_sample.file)">Download audio</a>
      </audio>
       <!-- <iframe
          height="90px" width="500px"
          src="https://api.sandbox.voice123.com/demo27794761_52693.mp3"
          ></iframe> -->
          <!-- https://voice123.com/voice-actor/davidkulle/demos/david-kulle-all-my-samples/67793 -->
          <!-- src="https://voice123.com/embed.html?id=ZXZXKHXP" -->
    </template>
    <template #name>
      <a :href="'https://voice123.com/'+actor.user.username" target="_blank" rel="noopener">{{ actor.user.name }}</a>
    </template>
    <template #summary>
      {{ actor.summary }}
    </template>
  </VoiceActor>

  <div v-if="voiceActors.length === 0">Loading...</div>

</div>


</template>


<style scoped>
.search-container {
  display: flex;
  flex-wrap: wrap;
}
.profile-picture{
  border: 3px solid #ccc; /* Optional: Add a border to visualize the rounding */
  border-radius: 50%; /* Make the corners rounded */
  background-color: aliceblue;
}
</style>