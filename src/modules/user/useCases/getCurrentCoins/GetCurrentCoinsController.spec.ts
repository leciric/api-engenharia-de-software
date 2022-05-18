/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

/* eslint-disable import/no-extraneous-dependencies */

import request from "supertest";
import { app } from "../../../../shared/infra/http/app";

describe("Get coins", () => {
  it("should be able to get coins of a user", async () => {
    await request(app).post("/user").send({
      name: "test-integration",
      email: "testintegration@example.com",
      password: "123"
    });

    const response = await request(app)
      .get("/user/coins/testintegration@example.com")
      .send();

    expect(response.status).toBe(200);
  });
});
