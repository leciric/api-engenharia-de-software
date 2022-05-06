import { User } from "../../../../entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";

let userRepository: IUserRepository;

describe("Get user coins", () => {
    beforeEach(() => {
        userRepository = new UserRepositoryInMemory();
      });
  it("should be able to read coins of a user", async () => {
      const user: User = {
          email: 'teste@teste.com',
          password: '123',
          name: 'Teste',
      }

      await userRepository.create(user);

      const userCoins = await userRepository.getCurrentCoins(user.email);

    expect(userCoins.coins).toEqual(50);
  });

  it("should return -1 if user do not exists", async () => {

    const userCoins = await userRepository.getCurrentCoins("teste@teste.com");

  expect(userCoins.coins).toEqual(-1);
});
    
});