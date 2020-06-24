import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';
import { UserDto, UserListDto, AddUserDto } from './dto';
import { toUserDto } from './mapper';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){}

  async findOne(username: string): Promise<UserDto | undefined> {
    return await this.userRepository.findOne({ where: { username }});
  }
  // Get all users
  async getAllUsers(): Promise<UserListDto> {
    const users = await this.userRepository.find();
    return  { users: users.map(u => toUserDto(u))};
  }
  // Add user
  async addUser(addUser: AddUserDto): Promise<UserDto> {
    const {username, password} = addUser;

    const user: UserEntity = await this.userRepository.create({
      username, password
    });

    await this.userRepository.save(user);
    return toUserDto(user);
  }
}
