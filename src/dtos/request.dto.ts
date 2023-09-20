import { ChatData, EmailData, PushData, SmsData } from "./data.dto";
import { EmailReceiver, SmsReceiver, PushReceiver, ChatReceiver } from "./receiver.dto";
import { ChatSender, EmailSender, PushSender, SmsSender } from "./sender.dto";

export class RequestSendDto {

    sender: EmailSender | SmsSender | PushSender | ChatSender;

    data: EmailData | SmsData | PushData | ChatData;

    receiver: EmailReceiver | SmsReceiver | PushReceiver | ChatReceiver;

}