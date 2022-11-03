import { TemplateMessage } from "./TemplateMessage";

export enum ConversationSenderType {
  BOT = "bot",
  CONTACT = "contact",
  OPERATOR = "operator",
}

export enum MessageType {
  TEXT = "text",
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
  FILE = "file",
  LOCATION = "location",
  EVENT = "event",
  RICH = "rich",
  MENU = "menu",
  BUTTONS = "buttons",
  LINK = "link",
  HSM = "hsm",
  WHATSTAPP_INTERACTIVE = "interactive",
  WHATSTAPP_STICKER = "whatsappSticker",
  WHATSTAPP_ORDER = "whatsappOrder",
  WHATSTAPP_TEXT = "whatsappText",
}

export enum MessageStatus {
  ACCEPTED = "accepted",
  PENDING = "pending",
  SENT = "sent",
  REJECTED = "rejected",
  FAILED = "failed",
  READ = "read",
  RECEIVED = "received",
  DELETED = "deleted",
  UNKNOWN = "unknown",
  TRANSMITTED = "transmitted",
  DELIVERED = "delivered",
}

export interface MessageContentMedia {
  url: string;
  caption?: string;
}

export interface MessageContentLocation {
  latitude: string;
  longitude: string;
}

export interface MessageContentHSMComponentMessageParamMedia {
  url: string;
}

export enum MessageContentHSMComponentMessageParamType {
  IMAGE = "image",
  DOCUMENT = "document",
  VIDEO = "video",
  TEXT = "text",
  CURRENCY = "currency",
  DATE_TIME = "date_time",
  PAYLOAD = "payload",
}

export interface MessageContentHSMComponentMessageParam {
  type: MessageContentHSMComponentMessageParamType;
  text?: string;
  payload?: string;
  currency?: {
    code: string;
    amount: number;
  };
  dateTime?: string;
  document?: MessageContentHSMComponentMessageParamMedia;
  image?: MessageContentHSMComponentMessageParamMedia;
  video?: MessageContentHSMComponentMessageParamMedia;
}

export enum MessageContentHSMComponentType {
  HEADER = "header",
  BODY = "body",
  BUTTON = "button",
}

export enum MessageContentHSMComponentSubType {
  QUICK_REPLY = "quick_reply",
  URL = "url",
}

export interface MessageContentHSMComponent {
  type: MessageContentHSMComponentType;
  sub_type: MessageContentHSMComponentSubType;
  index: number;
  parameters: MessageContentHSMComponentMessageParam[];
}

export interface MessageContentHSM {
  namespace: string;
  template_name: string;
  template_message: TemplateMessage;
  template_message_id: string;
  language: {
    policy: string;
    code: string;
  };
  params: {
    default: string;
    currency: {
      code: string;
      amount: number;
    };
    dateTime: string;
  };
  components: MessageContentHSMComponent[];
}

export enum WhatsappInteractiveType {
  LIST = "list",
  LIST_REPLY = "list_reply",
  BUTTON = "button",
  PRODUCT = "product",
  PRODUCT_LIST = "product_list",
  BUTTON_REPLY = "button_reply",
}

export interface WhatsAppInteractiveMedia {
  url: string;
  caption?: string;
}

export enum WhatsAppInteractiveHeaderType {
  TEXT = "text",
  VIDEO = "video",
  IMAGE = "image",
  DOCUMENT = "document",
}

export interface WhatsAppInteractiveHeader {
  type: WhatsAppInteractiveHeaderType;
  text?: string;
  video?: WhatsAppInteractiveMedia;
  image?: WhatsAppInteractiveMedia;
  document?: WhatsAppInteractiveMedia;
}

export interface WhatsAppInteractiveBody {
  text: string;
}

export interface WhatAppInteractiveSectionRow {
  id?: string;
  title?: string;
  description?: string;
}

export interface WhatAppInteractiveProduct {
  product_retailer_id: string;
}

export interface WhatsAppInteractiveSection {
  title: string;
  rows: WhatAppInteractiveSectionRow[];
  product_items?: WhatAppInteractiveProduct[];
}

export interface WhatAppInteractiveButton {
  id: string;
  type: string;
  title: string;
  image_url?: string;
}

export interface WhatsAppInteractiveAction {
  catalog_id?: string;
  product_retailer_id?: string;
  sections?: WhatsAppInteractiveSection[];
  button?: string;
  buttons?: WhatAppInteractiveButton[];
}

export interface WhatAppInteractiveFooter {
  text: string;
}

export interface WhatAppInteractiveReply {
  id: string;
  text: string;
  description?: string;
}

export interface MessageContentInteractive {
  type: WhatsappInteractiveType;
  header?: WhatsAppInteractiveHeader;
  body?: WhatsAppInteractiveBody;
  action?: WhatsAppInteractiveAction;
  footer?: WhatAppInteractiveFooter;
  reply?: WhatAppInteractiveReply;
}

export interface MessageContentWhatsappOrder {
  catalog_id: string;
  product_items: any[];
  text: string;
}

export interface MessageContentWhatsappSticker {
  link: string;
}

export interface MessageContentWhatsappText {
  text: any;
  context: any;
}

export type MessageContent =
  | string
  | MessageContentMedia
  | MessageContentLocation
  | MessageContentHSM
  | MessageContentInteractive
  | MessageContentWhatsappOrder
  | MessageContentWhatsappSticker
  | MessageContentWhatsappText;

export enum MessageDirection {
  SENT = "sent",
  RECEIVED = "received",
}

export interface Message {
  id: string;
  conversation_id: string;
  type: MessageType;
  status: MessageStatus;
  content: MessageContent;
  sender?: {
    id: string;
    name: string;
    avatar?: string;
  };
  direction: MessageDirection;
  sender_type: ConversationSenderType;
  error?: string;
  created_at: string;
  scheduled_at: string;
  sent_at?: string;
}
