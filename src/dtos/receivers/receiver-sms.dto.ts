import { ApiProperty } from '@nestjs/swagger';
import { Matches } from 'class-validator';

export class SmsReceiverDto {
  @Matches(/^\+\d{1,3}\.\d{9,11}$/, { message: 'Invalid Phone Number' })
  @ApiProperty({
    type: String,
    description: `A phone number for the receiver. It must match the following regex pattern:
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
  receiver_phone: string;
}
