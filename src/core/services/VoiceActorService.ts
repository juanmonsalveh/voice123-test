// import type { VoiceActorSearchI, VoiceActorI, VoiceActorPaginatedResult, VoiceActorServiceI } from '../models/VoiceActorInterfaces';


// export class VoiceActorService implements VoiceActorServiceI {
//   public async getVoiceActorByKeywordsPaginated(searchParams: VoiceActorSearchI): Promise<VoiceActorI[]> {
//       let allProviders: VoiceActorI[] = [];
//       const response = await this.fetchVoiceActors(searchParams);
//       if (response.providers.length === 0) {
//         console.warn(`No voice actors found`);
//       }
//       return response.providers;
//   }

//   private async fetchVoiceActors(params: VoiceActorSearchI): Promise<VoiceActorPaginatedResult> {
//     const { keywords, page, service } = params;
//     const url = `https://api.sandbox.voice123.com/providers/search/?keywords=${keywords}&page=${page}&service=${service}`;

//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }

//     const data: VoiceActorPaginatedResult = await response.json() as VoiceActorPaginatedResult;    
//     return data;
//   }

// }
