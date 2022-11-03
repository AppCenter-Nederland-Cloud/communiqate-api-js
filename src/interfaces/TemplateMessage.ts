export interface TemplateMessageExample {
  header_text: string[];
  body_text: string[];
  header_url: string[];
}

export enum TemplateMessageComponentButtonType {
  PHONE_NUMBER = "PHONE_NUMBER",
  URL = "URL",
  QUICK_REPLY = "QUICK_REPLY",
}

export interface TemplateMessageComponentButton {
  type: TemplateMessageComponentButtonType;
  text: string;
  url: string;
  phone_number: string;
  example: string[];
}

export enum TemplateMessageComponentType {
  BODY = "BODY",
  HEADER = "HEADER",
  FOOTER = "FOOTER",
  BUTTONS = "BUTTONS",
}

export enum TemplateMessageComponentFormat {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  DOCUMENT = "DOCUMENT",
  VIDEO = "VIDEO",
}

export interface TemplateMessageComponent {
  type: TemplateMessageComponentType;
  format: TemplateMessageComponentFormat;
  text: string;
  buttons: TemplateMessageComponentButton[];
  example: TemplateMessageExample;
}

export enum TemplateMessageStatus {
  NEW = "NEW",
  APPROVED = "APPROVED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  PENDING_DELETION = "PENDING_DELETION",
  DELETED = "DELETED",
}

export enum TemplateMessageCategory {
  AUTO_REPLY = "AUTO_REPLY",
  ACCOUNT_UPDATE = "ACCOUNT_UPDATE",
  PAYMENT_UPDATE = "PAYMENT_UPDATE",
  PERSONAL_FINANCE_UPDATE = "PERSONAL_FINANCE_UPDATE",
  SHIPPING_UPDATE = "SHIPPING_UPDATE",
  RESERVATION_UPDATE = "RESERVATION_UPDATE",
  ISSUE_RESOLUTION = "ISSUE_RESOLUTION",
  APPOINTMENT_UPDATE = "APPOINTMENT_UPDATE",
  TRANSPORTATION_UPDATE = "TRANSPORTATION_UPDATE",
  TICKET_UPDATE = "TICKET_UPDATE",
  ALERT_UPDATE = "ALERT_UPDATE",
  MARKETING = "MARKETING",
  OTP = "OTP",
  TRANSACTIONAL = "TRANSACTIONAL",
}

export interface TemplateMessage {
  id: string;
  created_at: string;
  updated_at: string;
  organization_id: string;
  messagebird_id: string;
  name: string;
  language: string;
  status: TemplateMessageStatus;
  category: TemplateMessageCategory;
  rejected_reason?: string;
  waba_id: string;
  namespace: string;
  components: TemplateMessageComponent[];
}
