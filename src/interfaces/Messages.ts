import { Account } from "./Conversations";
import { ConsentType, Contact, LanguageType } from "./Contacts";

export type MessageDirectionType = "INBOUND" | "OUTBOUND";
export type MessageStatusType =
  | "SCHEDULED"
  | "QUEUED"
  | "PENDING"
  | "SENT"
  | "READ"
  | "DELIVERED"
  | "RECEIVED"
  | "DELETED"
  | "UNKNOWN";

export type MessageContentInteractiveType =
  | "list"
  | "button"
  | "product"
  | "product_list"
  | "list_reply"
  | "button_reply";

export type SendMessageInteractiveContentHeaderType =
  | "text"
  | "video"
  | "image"
  | "document";

export interface Message {
  id: string;
  organization_id: string;
  conversation_id?: string;
  operator_id?: string;
  operator?: Account;
  contact_id: string;
  contact: Contact;
  sender_name: string;
  reply_to_message_id?: string;
  reply_to_message?: Message;
  direction: MessageDirectionType;
  status: MessageStatusType;
  metadata: Record<any, any>;
  error?: string;
  scheduled_at?: string; //date
  queued_at?: string; //date
  sent_at?: string; //date
  delivered_at?: string; //date
  deleted_at?: string; //date
  received_at?: string; //date
  read_at?: string; //date
  created_at: string; //date
  updated_at: string; //date
  text?: MessageContentText;
  image?: MessageContentMedia;
  video?: MessageContentMedia;
  audio?: MessageContentMedia;
  file?: MessageContentMedia;
  sticker?: MessageContentMedia;
  location?: MessageContentLocation;
  template?: MessageContentTemplate;
  interactive?: MessageContentInteractive;
}

export interface MessageContentText {
  text: string;
}

export interface MessageContentMedia {
  url: string;
  caption?: string;
}

export interface MessageContentLocation {
  latitude: string;
  longitude: string;
}

export interface MessageContentTemplate {
  template_variant_version_id: string;
  namespace: string;
  template_name: string;
  language: string[];
  params: any[];
  components: any[];
}

export interface MessageContentInteractive {
  type: MessageContentInteractiveType;
  header?: any;
  footer?: any;
  body: any[];
  action: any;
}

export type SendMessageType =
  | "TEXT"
  | "IMAGE"
  | "VIDEO"
  | "FILE"
  | "AUDIO"
  | "TEMPLATE"
  | "INTERACTIVE";

export interface SendMessage {
  type: SendMessageType;
  reply_message_id?: string;
  operator_id?: string;
  text?: string; //required if type TEXT
  image?: MessageContentMedia; //required if type IMAGE
  video?: MessageContentMedia; //required if type VIDEO
  file?: MessageContentMedia; //required if type FILE
  audio?: MessageContentMedia; //required if type AUDIO
  template?: SendMessageTemplateContent; //required if type TEMPLATE
  interactive?: SendMessageInteractiveContent; //required if type INTERACTIVE
  prebuilt_message_id?: string;
  schedule_date?: string;
  contact?: SendMessageCreateContact;
}

export interface SendMessageCreateContact {
  first_name?: string;
  last_name?: string;
  country?: string; // must be a ISO3166-alpha2 country code
  language?: LanguageType;
  email?: string;
  marketing_consent?: ConsentType;
}

export interface SendMessageTemplateContent {
  template_variant_version_id: string;
  body_params?: string[];
  button_param?: string;
  header_param?: string;
}

export interface SendMessageInteractiveContent {
  body: string;
  footer?: string;
  header?: SendMessageInteractiveContentHeader;
  action?: SendMessageInteractiveContentAction;
}

export interface SendMessageInteractiveContentHeader {
  text?: string;
  type: SendMessageInteractiveContentHeaderType;
  url?: string;
}

export interface SendMessageInteractiveContentAction {
  buttons?: string[]; //cannot be combined with section_button_title or sections
  section_button_title?: string; //required if sections are set. Cannot be combined with buttons
  sections?: SendMessageInteractiveContentActionSection[];
}

export interface SendMessageInteractiveContentActionSection {
  title?: string;
  rows: SendMessageInteractiveContentActionSectionRow[];
}

export interface SendMessageInteractiveContentActionSectionRow {
  title: string;
  description?: string;
}
