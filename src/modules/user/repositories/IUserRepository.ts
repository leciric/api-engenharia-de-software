import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUserRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
  getCurrentCoins(): Promise<{ coins: number }>;
}

export { IUserRepository };
