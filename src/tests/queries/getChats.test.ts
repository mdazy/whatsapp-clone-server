import { createTestClient } from "apollo-server-testing";
import { ApolloServer } from "apollo-server-express";
import schema from "../../schema";

describe("Query.chats", () => {
  it("should fetch all chats", async () => {
    const server = new ApolloServer({ schema });

    const { query } = createTestClient(server);

    const res = await query({
      query: `
        query {
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
