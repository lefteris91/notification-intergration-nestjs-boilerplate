import { ProviderInfoDto } from "./provider-info.dto";

export class InfoResponseDto {

    info: ProviderInfoDto

}

export class MessageResponseDto {

    message_id: string;

    success: boolean;

    message_meta?: Record<string, any>;

}