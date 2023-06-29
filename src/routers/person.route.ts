import { getPeople } from "controllers/people.controller";
import { Express, Router } from "express";


const peopleRoute = Router()


peopleRoute.get("/people", getPeople)

export default peopleRoute;