export type ContactAttributeType = "TEXT" | "NUMBER" | "BOOLEAN";

export interface ContactAttribute {
  id: string;
  organization_id: string;
  name: string;
  type: ContactAttributeType;
  slug: string;
  value?: string;
  created_at: string;
  updated_at: string;
}

export interface SetContactAttribute {
  contact_attribute_id: string;
  value?: string;
}

export interface CreateContactAttribute {
  name: string;
  type: ContactAttributeType;
}
