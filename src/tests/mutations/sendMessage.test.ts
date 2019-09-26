import { createTestClient } from "apollo-server-testing";
import { ApolloServer } from "apollo-server-express";
import schema from "../../schema";

describe("Mutation.sendMessage", () => {
  it("should add a new message", async () => {
    const server = new ApolloServer({ schema });
    const { query, mutate } = createTestClient(server);

    const res = await mutate({
      mutation: `
        mutation {
            sendMessage(chatId: 1, userId:2, content: "pika") {
            id
            content
            }
        }
      `
    });

    expect(res.data).toBeDefined();
    expect(res.data).toMatchSnapshot();
    expect(res.errors).toBeUndefined();
  });

  it("should throw for non-existing chat", async () => {
    const server = new ApolloServer({ schema });
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: `mutation { sendMessage(chatId: 5, userId: 2, content: "pika") { id } }`
    });

    expect(res.data).toBeDefined();
    expect(res.data).toEqual({ sendMessage: null });
    expect(res.errors).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });

  it("should throw for non-existing user", async () => {
    const server = new ApolloServer({ schema });
    const { mutate } = createTestClient(server);

    const res = await mutate({
      mutation: `mutation { sendMessage(chatId: 1, userId: 5, content: "pika") { id } }`
    });

    expect(res.data).toBeDefined();
    expect(res.data).toEqual({ sendMessage: null });
    expect(res.errors).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });
});
