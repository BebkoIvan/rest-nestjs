import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee.' })
  @IsString()
  readonly name: string;
  
  @ApiProperty({ description: 'coffee\'s brand.' })
  @IsString()
  readonly brand: string;
  
  @ApiProperty({ description: 'coffee\'s flavors.', example: []})
  @IsString({each: true})
  readonly flavors: string[];
}
