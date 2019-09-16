import {getManager} from "typeorm";
import {Register} from "../entity/Register";

export default class RegisterRepository {

    async create(user: Register): Promise<Register> {
        return await getManager().getRepository(Register).save(user);
    }

    async read(): Promise<Array<Register>> {
        return await getManager().getRepository(Register).find();
    }

    async readOne(id: any): Promise<Array<Register>> {
        return await getManager().getRepository(Register).findByIds(id);
    }

    async updade(product: Register) {
        return await getManager().getRepository(Register).save(product);
    }

    async delete(id: any) {
        return await getManager().getRepository(Register).delete(id);
    }
}