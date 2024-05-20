import { defineStore } from "pinia";
import type { VoiceActorI, VoiceActorPaginatedResult, VoiceActorSearchI } from "@/interfaces";

interface State {
	items: VoiceActorI[],
}

export const useStore = defineStore('main',  {
	state: (): State => ({
		items: [],
	}),

	actions: {
		async fetchVoiceActors(params: VoiceActorSearchI): Promise<void> {
			console.log('make requests')
			const { keywords, page, service } = params;
			// Move to env file
    		const url = `https://api.sandbox.voice123.com/providers/search/?keywords=${keywords}&page=${page}&service=${service}`;
			const response = await fetch(url);
			// Make in Interceptor
    		if (!response.ok)  throw new Error('Network response was not ok');
			// Try with axios
			const data: VoiceActorPaginatedResult = await response.json();
			this.items = data.providers;
		},
	}
})