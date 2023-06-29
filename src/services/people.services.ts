import { db } from "config/database.config"


export async function getRandomPeople() {

    try {
        const result = await db.query(`select * from people;`)

        return result

    }catch(err:any){
        return err.message
    }

}

export default {getRandomPeople}