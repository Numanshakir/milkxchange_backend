import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'database/database.module';
import { AttributesModule } from './attributes/attributes.module';
import { FavouriteModule } from './favourite/favourite.module';
@Module({
  imports: [
    UserModule,
    AuthModule,
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AttributesModule,
    FavouriteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
