import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SmsSenderDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The ID of the SMS message',
    example: '12345',
  })
  message_id: string;

  @IsNotEmpty()
  @Matches(/^\+\d{1,3}\.\d{9,11}$/, { message: 'Invalid Phone Number' })
  @ApiProperty({
    type: String,
    description: `The sender phone number. It must match the following regex pattern:
    ^\\+\\d{1,3}\\.\\d{9,11}$
    Explanation of the regex pattern:
    ^ asserts position at start of a line
    \\+ matches the character + literally (case sensitive)
    \\d matches a digit (equivalent to [0-9])
    {1,3} matches the previous token between 1 and 3 times, as many times as possible (greedy)
    \\. matches the character . literally (case sensitive)
    \\d matches a digit (equivalent to [0-9])
    {9,11} matches the previous token between 9 and 11 times, as many times as possible (greedy)
    $ asserts position at the end of a line`,
    example: '+XX.XXXXXXXXXX',
  })
  sender_phone: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The SMS message content',
    example: 'Hello, world!',
  })
  message: string;
}
