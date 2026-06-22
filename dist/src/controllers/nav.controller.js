import { getNavService, updateNavService } from '../service/nav.service.js';
import mongoose from 'mongoose';
export const getNav = async (req, res) => {
    try {
        const result = await getNavService();
        res.status(200).json({
            success: true,
            message: "all nav data retrived",
            data: result
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({
            success: false,
            message: errorMessage,
        });
    }
};
export const updateNav = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const payload = req.body;
    try {
        const result = await updateNavService(id, payload);
        res.status(200).json({
            success: true,
            message: "Nav Data Updated",
            data: result
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        res.status(500).json({
            success: false,
            message: errorMessage,
        });
    }
};
