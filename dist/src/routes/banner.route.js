import { Router } from "express";
import { getBanner, updateBanner } from "../controllers/banner.controller.js";
const router = Router();
router.get('/', (req, res) => {
    res.send("Banner section connected");
});
router.get("/getBanner", getBanner);
router.patch("/updateBanner/:id", updateBanner);
export default router;
