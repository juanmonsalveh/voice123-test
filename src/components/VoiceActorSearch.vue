<script setup lang="ts">
import VoiceActorCard from "./VoiceActorCard.vue";

// import type { VoiceActorI, VoiceActorSearchI } from "@/core/models/VoiceActorInterfaces";
// import { VoiceActorService } from "../core/services/VoiceActorService";
import { onBeforeMount, ref } from "vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
import type { VoiceActorSearchI } from "@/interfaces";

const store = useStore();
const loading = ref(false);
const { items } = storeToRefs(store);
// Move to constants folder
const DEFAULT_PARAMS: VoiceActorSearchI = {
	page: 1,
	keywords: "woman",
	service: "voice_over",
};

onBeforeMount(async () => {
	try {
		loading.value = true;
		await store.fetchVoiceActors(DEFAULT_PARAMS)
	} catch (err) {
		console.log(err)
	} finally {
		loading.value = false;
	}
})


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
  <div class="search-container">
    <div v-if="items.length === 0 && loading">Loading...</div>

		<div
			v-if="items.length > 0"
			class="actor-list"
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
</template>

<style scoped>
.search-container {
    display: flex;
    flex-wrap: wrap;
}
</style>
