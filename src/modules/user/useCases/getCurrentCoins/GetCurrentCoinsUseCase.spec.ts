import { User } from "../../../../entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";
import { GetCurrentCoinsUseCase } from "./GetCurrentCoinsUseCase";
import "reflect-metadata";

let userRepository: IUserRepository;
let getCurrentCoinsUseCase: GetCurrentCoinsUseCase;

describe("Get user coins", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    getCurrentCoinsUseCase = new GetCurrentCoinsUseCase(userRepository);
  });
  it("should be able to read coins of a user", async () => {
    const user: User = {
      email: "teste@teste.com",
      password: "123",
      name: "Teste"
    };

    await userRepository.create(user);

    const userCoins = await getCurrentCoinsUseCase.execute({
      email: user.email
    });

    expect(userCoins.coins).toEqual(50);
  });

  it("should not be able to read coins of a user that do not exist", async () => {
    await expect(
      getCurrentCoinsUseCase.execute({ email: "teste@teste.com" })
    ).rejects.toEqual(new Error("User do not exists"));
  });
});
