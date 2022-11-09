export enum ContactAttributeType {
  TEXT = "text",
  NUMBER = "number",
}

export interface ContactAttribute {
  id: string;
  name: string;
  type: ContactAttributeType;
  created_at: string;
  updated_at: string;
}

export interface ContactAttributeValue {
  attribute: ContactAttribute;
  value: string;
}

export interface UnsetContactAttributeRequest {
  contact_attribute_id: string;
}

export interface SetContactAttributeRequest {
  contact_attribute_id: string;
  value: string;
}
