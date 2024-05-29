<script setup lang="ts">
import { ref, type PropType, computed } from 'vue';
import type { VoiceActorI } from '@/interfaces';

const props = defineProps({
  voiceActor: {
    type: Object as PropType<VoiceActorI>,
    required: true,
  },
  searchParam: {
    type: String,
    required: false,
  },
});

const show = ref(false);

const APIURL = 'https://sandbox.voice123.com/samples';
const handleAudioURL = (url: string) => {
  const audioUrl2 = url.includes('http') ? (url) : (APIURL.concat(url.replace("demos","")));
  return audioUrl2;
};

let resultSummary = ref(['']);

const handleSummary = (inputSummary: string, searchParam: String) => {

  if (!inputSummary) {
    resultSummary.value = [''];
    return;
  }
  
  if (!searchParam.valueOf) {
    resultSummary.value = [inputSummary];
  } else {
    resultSummary.value = inputSummary.split(new RegExp(`(${searchParam.valueOf})`, 'gi'));
  }

};

const computedSummary = computed(() => {
  if (props.searchParam) {
    handleSummary(props.voiceActor.summary, props.searchParam);
  } else {
    resultSummary.value = [props.voiceActor.summary];
  }
  // console.log('result summary: ', resultSummary);
  return resultSummary.value;
});

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
          controls :src="handleAudioURL(voiceActor.relevant_sample.file)">
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
            <span v-for="(fragment, index) in computedSummary" :key="index">
              {{ fragment }}

              <!-- <template v-if="searchParam && typeof props.searchParam === 'string' && fragment.toLowerCase() === searchParam.toLowerCase()">
                <mark>{{ fragment }}</mark>
              </template>
              <template v-else>
                {{ fragment }}
              </template> -->
            </span>
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