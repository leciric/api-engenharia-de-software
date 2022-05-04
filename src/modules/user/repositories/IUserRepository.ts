import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
  getCurrentCoins(email: string): Promise<{ coins: number }>;
  list(): Promise<User[]>
}

export { IUserRepository };

