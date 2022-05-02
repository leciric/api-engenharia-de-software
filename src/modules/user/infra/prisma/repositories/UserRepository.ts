import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

class UserRepository implements IUserRepository {
  create({ name, email, password }: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getCurrentCoins(): Promise<{ coins: number }> {
    throw new Error("Method not implemented.");
  }
}

export { UserRepository };
