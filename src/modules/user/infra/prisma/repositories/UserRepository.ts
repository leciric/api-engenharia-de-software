import { User } from "@prisma/client";
import { prisma } from "../../../../../shared/infra/prisma/client";
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

class UserRepository implements IUserRepository {
  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }
  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    await prisma.user.create({
      data: {
        email,
        name,
        password
      }
    })
  }
 async getCurrentCoins(email: string): Promise<{ coins: number }> {
   const user = await prisma.user.findUnique({ where: { email } });

   return {coins: user?.coins ?? 0}
  }
}

export { UserRepository };

