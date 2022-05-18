import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
}

@injectable()
class GetCurrentCoinsUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email }: IRequest): Promise<{ coins: number }> {
    const userExists = await this.userRepository.getByEmail(email);

    if (!userExists) {
      throw new Error("User do not exists");
    }

    const coins = await this.userRepository.getCurrentCoins(email);

    return coins;
  }
}

export { GetCurrentCoinsUseCase };
