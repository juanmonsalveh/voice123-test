export interface VoiceActorServiceI {
    getVoiceActorByKeywordsPaginated(searchParams: VoiceActorSearchI): Promise<VoiceActorI[]>;
}

export interface VoiceActorSearchI {
    page: number;
    keywords: string;
    service: string;
}
export interface VoiceActorPaginatedResult {
    providers: VoiceActorI[];
}

export interface VoiceActorI{
    id: number,
    user_id: number,
    service_id: string,
    headline: string,
    summary: string,
    user: {
      id: number,
      public_hash: string,
      username: string,
      name: string,
      picture_small: string,
      picture_medium: string,
      picture_large: string
    },
    relevant_sample: {
      id: number,
      provider_id: number,
      demo_id: number,
      file: string
    },
    additional_details: string,
    description: string
  }

  /*
  export interface VoiceActor{
      "id": number,
      "user_id": number,
      "service_id": string,
      "headline": string,
      "summary": string,
      "user": {
        "id": number,
        "public_hash": string,
        "username": string,
        "name": string,
        "picture_small": string,
        "picture_medium": string,
        "picture_large": string
      },
      "relevant_sample": {
        "id": number,
        "provider_id": number,
        "demo_id": number,
        "file": string
      },
      "additional_details": string,
      "description": string
    }
*/

