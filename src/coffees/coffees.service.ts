import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'test Name',
      brand: 'Aroma',
      flavors: ['chocolate', 'vanilla']
    }
  ];

  getAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find(item => item.id === id);
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {

    }
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = {
      id: this.coffees.length,
      ...createCoffeeDto,
    }
    this.coffees.push(coffee);
    return coffee;
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(i => i.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
    else {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
  }
}
