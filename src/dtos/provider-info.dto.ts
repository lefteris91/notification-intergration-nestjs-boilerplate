import { MessageTypeEnum } from "../enums/message-type.enum";

export class ProviderInfoDto {
    name: string;
    logo?: string;
    description?: string;
    type: MessageTypeEnum;
}