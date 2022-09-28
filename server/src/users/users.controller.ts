import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/role-auth.decorator';
import { RolesGuard } from 'src/auth/role.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags("Users")
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: "Create user"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

    @ApiOperation({summary: "Get All users"})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get() 
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: "Add role"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/role") 
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto);
    }

    @ApiOperation({summary: "Ban user"})
    @ApiResponse({status: 200})
    @UseGuards(JwtAuthGuard)
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/ban") 
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto);
    }
}
