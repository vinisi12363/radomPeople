import { Router } from "express";
import peopleRoute from "./person.route";

const router = Router ()

router.use(peopleRoute)


export default router