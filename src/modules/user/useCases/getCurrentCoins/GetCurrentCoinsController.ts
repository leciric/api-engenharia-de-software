import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCurrentCoinsUseCase } from "./GetCurrentCoinsUseCase";

class GetCurrentCoinsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getCurrentCoinsUseCase = container.resolve(GetCurrentCoinsUseCase);

    const coins = await getCurrentCoinsUseCase.execute();

    return response.status(200).json(coins);
  }
}

export { GetCurrentCoinsController };
