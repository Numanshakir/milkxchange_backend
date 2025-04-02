import { Controller, Get, Param, Delete } from '@nestjs/common';
import { FavouriteService } from './favourite.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags('Favourite')
@ApiBearerAuth()
@Controller('favourite')
export class FavouriteController {
  constructor(private readonly favouriteService: FavouriteService) {}

  @Get(':id')
  like(@Param('id') userId: number) {
    return this.favouriteService.create(userId);
  }

  @Delete(':id')
  disLike(@Param('id') userId: number) {
    return this.favouriteService.remove(userId);
  }

  @Get()
  findAll() {
    return this.favouriteService.findAll();
  }
}
