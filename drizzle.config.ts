export default {
    schema: "./database/schema.ts",
    out: "./migrations",
    driver: "better-sqlite",
    dbCredentials: {
        url: "./sqlite.db",
    },
};