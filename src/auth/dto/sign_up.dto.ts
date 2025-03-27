import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class SignupDto {
  @IsString()
  @IsNotEmpty()
  email: string; // ✅ Required for normal signup

  @IsString()
  @IsOptional()
  name?: string | null; // ✅ Optional

  @IsString()
  @IsNotEmpty()
  password: string; // ✅ Required for normal signup
}

export class SocialSignupDto {
  @IsString()
  @IsOptional()
  email?: string | null; // ✅ Optional

  @IsString()
  @IsOptional()
  name?: string | null; // ✅ Optional

  @IsString()
  @IsNotEmpty()
  uid: string; // ✅ Required for social signup

  @IsString()
  @IsOptional()
  password?: string | null; // ✅ Required for normal signup
}

export class ResetPasswordDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
