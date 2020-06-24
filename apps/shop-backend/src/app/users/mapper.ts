import { UserEntity } from './entity/user.entity';
import { UserDto } from './dto';

export const toUserDto = (data: UserEntity): UserDto => {
  const {id, username, password} = data;

  const userDto: UserDto = {id, username, password};

  return userDto;
};
