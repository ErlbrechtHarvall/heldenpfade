import {InsertUser, users} from "../../../database/schema";
import {db} from "../sqlite-server";

export default defineEventHandler(async (event: any) => {
    try {
        const body = await readBody(event);
        const newUser: InsertUser = {
            ...body
        }
        const result = db.insert(users).values(newUser).run();
        return {newUser: result}
    } catch (e: any) {
        throw createError({
            statusCode: 400,
            statusMessage: e.message,
        });
    }
});