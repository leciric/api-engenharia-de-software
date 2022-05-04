import { User } from "@prisma/client";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";

let userRepository: IUserRepository;

describe("Create user", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
      });
  it("should be able to create a user", async () => {
      const user: User = {
          id: '12312321',
          email: 'teste@teste.com',
          password: '123',
          name: 'Teste',
          coins: null
      }

      await userRepository.create(user);

      const users = await userRepository.list();

    expect(users.length).toEqual(1);
  });
    
});