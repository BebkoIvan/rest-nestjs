import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() {limit, offset}) {
    return this.coffeesService.getAll({limit, offset});
    
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.coffeesService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: UpdateCoffeeDto) {
    return this.coffeesService.update(id, body);
  }

  @Post()
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeesService.create(body);
  }
}
