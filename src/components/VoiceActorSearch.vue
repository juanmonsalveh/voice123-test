<script setup lang="ts">
import VoiceActorCard from "./VoiceActorCard.vue";

// import type { VoiceActorI, VoiceActorSearchI } from "@/core/models/VoiceActorInterfaces";
// import { VoiceActorService } from "../core/services/VoiceActorService";
import { onBeforeMount, ref, watch } from "vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import type { VoiceActorSearchI } from "@/interfaces";

const store = useStore();
const { items } = storeToRefs(store);

const loading = ref(false);
const searchQuery = ref("");
const page = ref(1);

// Move to constants folder
const DEFAULT_PARAMS: VoiceActorSearchI = {
	page: 1,
	keywords: "",
	service: "voice_over",
};


const fetchVoiceActors = async (params: VoiceActorSearchI) => {
	try {
		loading.value = true;
		await store.fetchVoiceActors(params);
	} catch (err) {
		console.log(err);
	} finally {
		loading.value = false;
	}
};

onBeforeMount(async () => {
	fetchVoiceActors(DEFAULT_PARAMS);
})

const handleSearch = () => {
	const params: VoiceActorSearchI = {
		...DEFAULT_PARAMS,
		keywords: searchQuery.value,
		page: page.value,
	};
	fetchVoiceActors(params);
};

const handleKeyPress = (event: KeyboardEvent) => {
	if (event.key === "Enter") {
		handleSearch();
	}
};

watch(page, () => {
	handleSearch();
});

/*
// definitions
const voiceActorService = new VoiceActorService();

// business
const voiceActors = ref<VoiceActorI[]>([]);

const searchParams: VoiceActorSearchI = {
    page: 1,
    keywords: "woman",
    service: "voice_over",
};

voiceActorService
    .getVoiceActorByKeywordsPaginated(searchParams)
    .then((result: VoiceActorI[]) => {
        console.log("Voice Actors:", result);
        voiceActors.value = result;
    })
    .catch((error: Error) => {
        console.error("Error fetching voice actors:", error);
    });
*/

</script>

<template>

	<div class="search-bar blue">
		<v-text-field clearable label="Search" variant="outlined" 
			v-model="searchQuery" @keypress="handleKeyPress"></v-text-field>
		<v-btn variant="tonal" @click="handleSearch">
			Search
		</v-btn>
	</div>

  <div class="">
    <div v-if="items.length === 0 && loading">Loading...</div>

		<div
			v-if="items.length > 0"
			class="voice-actor-list"
		>
			<VoiceActorCard
				v-for="actor in items"
				:key="actor.id"
				:voiceActor="actor"
			/>
		</div>

		<div v-else>
			No results
		</div>
  </div>

	<div class="text-center blue">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              :length="15"
              class="my-4"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
	</div>
</template>

<style scoped>
.voice-actor-list {
		display: flex;
		flex-wrap: wrap;
}
.search-bar {
	display: flex;
	gap: 2%;
	width: 60%;
	margin: auto;
	align-items: center;
}

</style>
