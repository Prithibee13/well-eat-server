import { Router } from "express";
import { getNav, updateNav } from "../controllers/nav.controller.js";
const router = Router();
router.get('/', (req, res) => {
    res.send("Nav section connected");
});
router.get("/getNav", getNav);
router.patch("/updateNav/:id", updateNav);
export default router;
