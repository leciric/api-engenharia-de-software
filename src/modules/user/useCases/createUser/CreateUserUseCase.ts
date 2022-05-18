import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
  password: string;
  email: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userExists = await this.userRepository.getByEmail(email);

    if (userExists) {
      throw new Error("User already exists");
    }
    await this.userRepository.create({ name, email, password });
  }
}

export { CreateUserUseCase };
