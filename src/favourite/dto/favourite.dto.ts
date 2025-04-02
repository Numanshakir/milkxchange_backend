import { ApiProperty } from '@nestjs/swagger';

export class FavouriteDto {
  @ApiProperty()
  userId: number;
}
