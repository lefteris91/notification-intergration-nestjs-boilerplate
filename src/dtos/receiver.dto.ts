export interface EmailReceiver {
    to: string;
    cc: string;
    bcc: string;

}
export interface SmsReceiver {
    receiver_phone: string;
}
export interface ChatReceiver {
    
}
export interface PushReceiver {
    device_token: string;
}