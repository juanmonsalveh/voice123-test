import type { UserActorI } from "./userActor"
import type { VoiceSampleI } from "./voiceSample"

export interface VoiceActorI{
	id: number,
	user_id: number,
	service_id: string,
	headline: string,
	summary: string,
	user: UserActorI,
	relevant_sample: VoiceSampleI,
	additional_details: string,
	description: string
}