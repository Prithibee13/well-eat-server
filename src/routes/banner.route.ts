import { Router } from "express"
import { getBanner, updateBanner } from "../controllers/banner.controller.ts"

const router = Router()

router.get('/', (req : Request, res: Response) => {
    res.send("Banner section connected")
})

router.get("/getBanner", getBanner)

router.patch("/updateBanner/:id", updateBanner)

export default router