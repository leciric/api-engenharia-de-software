import { User } from "../../../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
  getByEmail(email: string): Promise<User | undefined | null>;
  getCurrentCoins(email: string): Promise<{ coins: number }>;
  list(): Promise<User[]>;
}

export { IUserRepository };
