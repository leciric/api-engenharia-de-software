/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

/* eslint-disable import/no-extraneous-dependencies */

import request from "supertest";
import { app } from "../../../../shared/infra/http/app";

describe("Create user", () => {
  it("should be able to create a user", async () => {
    const response = await request(app).post("/user").send({
      name: "test-integration",
      email: "testintegration@example.com",
      password: "123"
    });

    expect(response.status).toBe(201);
  });

  it("should be able to create a user that already exists", async () => {
    await request(app).post("/user").send({
      name: "test-integration",
      email: "testintegration@example.com",
      password: "123"
    });
    const response = await request(app).post("/user").send({
      name: "test-integration-exists",
      email: "testintegration@example.com",
      password: "123"
    });

    expect(response.status).toBe(400);
  });
});
