import { Contact } from "./Contacts";
import { Message } from "./Messages";

export type ConversationStatusType = "OPEN" | "ASSIGNED" | "CLOSED";
export type UpdateConversationStatusType = "OPEN" | "CLOSED";

export interface Conversation {
  id: string;
  organization_id: string;
  operator_id?: string;
  channel_id: string;
  operator?: Account;
  channel: Channel;
  contact: Contact;
  status: ConversationStatusType;
  autopilot: boolean;
  last_message?: Message;
  last_message_at?: string;
  last_received_at?: string;
  expired: boolean;
  labels: Label[];
  message_count: number;
  created_at: string;
  updated_at: string;
}

export interface UpdateConversation {
  operator_id?: string;
  label_ids?: string[];
  autopilot?: boolean;
  status?: UpdateConversationStatusType;
}

export interface Account {
  id: string;
  organization_id: string;
  organization: Organization;
  auth0_id: string;
  email: string;
  name: string;
  first_name: string;
  roles: string[];
  permissions: string[];
  avatar?: File;
  created_at: string;
  updated_at: string;
}

export interface Organization {
  id: string;
  features?: string[];
  name: string;
  email: string;
  coc_number?: string; //Chamber Of Commerce of The Netherlands
  phone?: string;
  billing_email?: string;
  address_line?: string;
  address_line2?: string;
  country_code?: string; // must be a ISO3166-alpha2 language code
  city?: string;
  postcode?: string;
  province?: string;
  settings: Record<any, any>; //Settings
  created_at: string;
  updated_at: string;
}

export interface Channel {
  id: string;
  organization_id: string;
  platform: string; //type
  settings: Record<any, any>; //Settings
  created_at: string;
  updated_at: string;
}

export interface Label {
  id: string;
  organization_id: string;
  name: string;
  color: string; //Color in HEX
  created_at: string;
  updated_at: string;
}
