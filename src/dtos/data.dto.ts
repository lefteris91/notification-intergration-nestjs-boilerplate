export interface EmailData{
    
    
    
    attachments?: object[];
    message: string;
  }
  export interface SmsData{
    
    message: string;
  }
  export interface PushData{
    
    title: string;
    data?: object;
    message: string;
  }
  export interface ChatData{
    room_id: string;
    room_name?: string;
    message: string;
  }