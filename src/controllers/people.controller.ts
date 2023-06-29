import peopleService from "services/people.services";
import { Request, Response } from "express";

export const getPeople= async (req : Request , res : Response)=>{
    try {
        const result = await peopleService.getRandomPeople();

        if(result) {

             return res.status(200).send(result.rows)
        }
    } catch (error :any) {
            return error.message;
    }



}