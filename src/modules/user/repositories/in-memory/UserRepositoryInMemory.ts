import { User } from "../../../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import "reflect-metadata";

class UserRepositoryInMemory implements IUserRepository {
  users: User[] = [];
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user: User = { id: 123, name, email, password, coins: 50 };

    const alreadyExists = this.users.find((item) => item.email === email);

    if (!alreadyExists) {
      this.users.push(user);
    }
  }
  async getCurrentCoins(email: string): Promise<{ coins: number }> {
    const user = this.users.find((item) => item.email === email);

    return { coins: user?.coins ?? 0 };
  }
  async list(): Promise<User[]> {
    return this.users;
  }
  async getByEmail(email: string): Promise<User | undefined | null> {
    const user = this.users.find((item) => item.email === email);
    return user;
  }
}

export { UserRepositoryInMemory };
