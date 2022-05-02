import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class GetCurrentCoinsUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<{ coins: number }> {
    const coins = await this.userRepository.getCurrentCoins();

    return coins;
  }
}

export { GetCurrentCoinsUseCase };
