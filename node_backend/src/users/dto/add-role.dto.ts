import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: "Must have string"})
    readonly value: string;
    @IsNumber({}, {message: "must have a number"})
    readonly userId: number;
}