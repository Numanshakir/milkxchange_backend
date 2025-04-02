import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'John Doe',
    nullable: true,
  })
  name?: string | null;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'test@gmail.com',
    nullable: true,
  })
  email?: string | null;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '',
    nullable: true,
  })
  account_type?: string | null;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '',
    nullable: true,
  })
  mobile_number?: string | null;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '',
    nullable: true,
  })
  location?: string | null;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '',
    nullable: true,
  })
  about?: string | null;
  @IsOptional()
  @ApiPropertyOptional({
    example: [],
    nullable: true,
  })
  attributes?: number[];
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '',
    nullable: true,
  })
  pumped?: string | null;
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '',
    nullable: true,
  })
  profilePic?: string | null;
  @IsNumber()
  @IsOptional()
  @ApiPropertyOptional({
    example: 0.0,
    nullable: true,
  })
  milkPrice?: number | null;
}

export class AttributesDto {
  @IsString()
  @IsOptional()
  name?: string | null;
}
