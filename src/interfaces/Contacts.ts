export type LanguageType = "nl" | "de" | "en";
export type ConsentType = "NOT_ALLOWED" | "ALLOWED" | "UNKNOWN";

export interface File {
  id: string;
  path: string;
  name: string;
  original_file_name: string;
  size: number;
  mime: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export interface Contact {
  id: string;
  organization_id: string;
  conversation_id?: string;
  avatar?: File;
  name: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  phone: string; //TODO: phone format
  email?: string;
  language: LanguageType;
  country: string; // must be a ISO3166-alpha2 country code
  marketing_consent: ConsentType;
  created_at: string;
  updated_at: string;
}

export interface CreateContact {
  avatar_file_id?: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  phone: string; //TODO: phone format
  email: string;
  country: string; // must be a ISO3166-alpha2 country code
  language: LanguageType;
  marketing_consent: ConsentType;
}

export interface UpdateContact {
  avatar_file_id?: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  phone?: string; //TODO: phone format
  email?: string;
  country?: string; // must be a ISO3166-alpha2 country code
  language?: LanguageType;
  marketing_consent?: ConsentType;
}
