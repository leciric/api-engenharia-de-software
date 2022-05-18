import { User } from "../../../../entities/User";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../../repositories/IUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import "reflect-metadata";

let userRepository: IUserRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create user", () => {
  beforeEach(() => {
    userRepository = new UserRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(userRepository);
  });
  it("should be able to create a user", async () => {
    const user: User = {
      id: "5643234",
      email: "teste@teste.com",
      password: "123",
      name: "Teste",
      coins: undefined
    };

    await createUserUseCase.execute(user);

    const users = await userRepository.list();

    expect(users.length).toEqual(1);
  });

  it("should not be able to create a user that already exists", async () => {
    const user: User = {
      id: "123444",
      email: "teste@teste.com",
      password: "123",
      name: "Teste",
      coins: undefined
    };

    await createUserUseCase.execute(user);

    await expect(createUserUseCase.execute(user)).rejects.toEqual(
      new Error("User already exists")
    );
  });
});
