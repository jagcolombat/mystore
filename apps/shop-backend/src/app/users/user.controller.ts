import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, AddUserDto, UserListDto, UserSearchDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService){}

  @Get()
  async find(@Query() query: UserSearchDto): Promise<UserDto | UserListDto>{
    console.log('query', query, typeof query);
    const users = query.username ?
      await this.userService.findOne(query.username || '') :
      await this.userService.getAllUsers();
    return users;
  }

  @Post()
  async create(
    @Body() addUserDto: AddUserDto,
    @Req() req: any
  ): Promise<UserDto>{
    console.log('create', addUserDto);
    return await this.userService.addUser(addUserDto);
  }
}
