import { Router } from "express"
import { getNav, updateNav } from "../controllers/nav.controller"

const router = Router()

router.get('/', (req : Request, res: Response) => {
    res.send("Nav section connected")
})

router.get("/getNav", getNav)

router.patch("/updateNav/:id", updateNav)

export default router