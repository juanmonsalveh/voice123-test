import type { VoiceActorI, VoiceActorSearchI } from "@/interfaces";

export interface VoiceActorServiceI {
  getVoiceActorByKeywordsPaginated(searchParams: VoiceActorSearchI): Promise<VoiceActorI[]>;
}

