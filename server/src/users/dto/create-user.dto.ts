import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({example: "user@gmail.com", description: "e-mail adress"})
    @IsString({message: "Must be a string"})
    @IsEmail({}, {message: "Email not correctly"})
    readonly email: string;
    @ApiProperty({example: "12345678", description: "password"})
    @IsString({message: "Must be a string"})
    @Length(4,16, {message: 'password must have min 4 and max 16 symbols'})
    readonly password: string;
}