import { createTestClient } from "apollo-server-testing";
import { ApolloServer } from "apollo-server-express";
import schema from "../../schema";

describe("Query.chats", () => {
  it("should fetch all chats", async () => {
    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server);

    const res = await query({
      query: `
        {
          chats {
            id
            user {
              name
              image
            }
            lastMessage {
              content
              date
            }
          }
        }`
    });

    expect(res.data).toBeDefined();
    expect(res.errors).toBeUndefined();
    expect(res.data).toMatchSnapshot();
  });
});

describe("Query.chat", () => {
  it("should fetch messages", async () => {
    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server);
    const res = await query({
      query: `
          {
            chat(id:1) {
              id
              messages {
                id
                content
                date
              }
            }
          }
        `
    });
    expect(res.data).toBeDefined();
    expect(res.errors).toBeUndefined();
    expect(res.data).toMatchSnapshot();
  });

  it("should throw for non-existing chat", async () => {
    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server);
    const res = await query({
      query: `
          {
            chat(id:4) {
              id
            }
          }
        `
    });
    expect(res.data).toBeDefined();
    expect(res.data).toEqual({ chat: null });
    expect(res.errors).toBeDefined();
    expect(res.errors).toMatchSnapshot();
  });
});
