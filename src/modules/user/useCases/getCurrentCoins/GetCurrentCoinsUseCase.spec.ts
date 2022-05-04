import { User } from "@prisma/client";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";

let userRepository: IUserRepository;

describe("Get user coins", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
      });
  it("should be able to read coins of a user", async () => {
      const user: User = {
          id: '12312321',
          email: 'teste@teste.com',
          password: '123',
          name: 'Teste',
          coins: null
      }

      await userRepository.create(user);

      const userCoins = await userRepository.getCurrentCoins(user.email);

    expect(userCoins.coins).toEqual(50);
  });
    
});