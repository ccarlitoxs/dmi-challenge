import fastify from "../src/server/index";

describe("Test the health path, ", () => {
  test('Test the root "/" path', async () => {
    const response = await fastify.inject({
      method: "GET",
      url: "/",
    });
    expect(response.statusCode).toBe(200);
  });
});
