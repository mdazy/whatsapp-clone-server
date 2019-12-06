import { importSchema } from "graphql-import";
import { makeExecutableSchema, IResolvers } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = importSchema("src/schema/typedefs.graphql");

export default makeExecutableSchema({ resolvers: resolvers as IResolvers, typeDefs });
