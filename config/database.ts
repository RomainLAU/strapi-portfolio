import parse from "pg-connection-string";

const { host, port, database, user, password } = parse(
  process.env.DATABASE_URL
);

export default ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", host),
        port: env.int("DATABASE_PORT", port),
        database: env("DATABASE_NAME", database),
        username: env("DATABASE_USERNAME", user),
        password: env("DATABASE_PASSWORD", password),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
