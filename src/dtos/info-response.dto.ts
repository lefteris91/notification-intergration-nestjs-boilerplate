import { MessageTypeEnum } from "../enums/message-type.enum";

export class InfoResponseDto {

    name: string;

    logo?: string;

    description?: string;

    type: MessageTypeEnum;

}