import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MatchFilter {
  @IsOptional()
  @ApiPropertyOptional({
    nullable: true,
  })
  attributes: number[];
}
