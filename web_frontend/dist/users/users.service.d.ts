import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: typeof User);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
