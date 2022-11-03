export interface CheckAutoPilotActiveResponse {
  active: boolean;
}

export interface ToggleAutoPilotRequest {
  active?: boolean;
}

export interface AssignOperatorRequest {
  operator_id?: string | null;
}

export interface SendMessageRequest {
  scheduled_at?: string;
  template_message_id: string;
  variables?: {
    header?: string;
    body?: string[];
    buttons?: string[];
  };
}

export interface UpdateMessageRequest {
  message_id: string;
  scheduled_at: string;
}

export interface DeleteMessageRequest {
  message_id: string;
}
