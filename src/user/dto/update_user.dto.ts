import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string | null;
  @IsString()
  @IsOptional()
  email?: string | null;
  @IsString()
  @IsOptional()
  password?: string | null;
  @IsString()
  @IsOptional()
  role?: string | null;
  @IsString()
  @IsOptional()
  account_type?: string | null;
  @IsString()
  @IsOptional()
  mobile_number?: string | null;
  @IsString()
  @IsOptional()
  location?: string | null;
  @IsString()
  @IsOptional()
  about?: string | null;
  @IsOptional()
  attributes?: string[];
  @IsString()
  @IsOptional()
  pumped?: string | null;
  @IsString()
  @IsOptional()
  profilePic?: string | null;
  @IsNumber()
  @IsOptional()
  milkPrice?: number | null;
}

export class AttributesDto {
  @IsString()
  @IsOptional()
  name?: string | null;
}
