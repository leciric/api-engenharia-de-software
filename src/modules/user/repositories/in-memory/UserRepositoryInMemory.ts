import { User } from "../../../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";


class UserRepositoryInMemory implements IUserRepository{

    users: User[] = []
    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user:User = {id: '112222', name, email, password, coins: 50 };

        this.users.push(user);
    }
    async getCurrentCoins(email: string): Promise<{ coins: number; }> {
        const user = this.users.find(item => item.email === email);

        return {coins: user?.coins ?? 0};
    }
    async list(): Promise<User[]> {
        return this.users;
    }

}


export { UserRepositoryInMemory };

