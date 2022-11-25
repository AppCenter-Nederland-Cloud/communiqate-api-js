export interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  country: string;
  subscribed: boolean;
  avatar: string | null;
  email: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpdateContact {
  first_name: string;
  last_name: string;
  country: string;
  email: string | null;
}
