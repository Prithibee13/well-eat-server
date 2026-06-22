import { getBannerService, updateBannerService } from '../service/banner.service.js';
import mongoose from 'mongoose';
export const getBanner = async (req, res) => {
    try {
        const result = await getBannerService();
        res.status(200).json({
            success: true,
            message: "all hero data retrived",
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
export const updateBanner = async (req, res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const payload = req.body;
    try {
        const result = await updateBannerService(id, payload);
        res.status(200).json({
            success: true,
            message: "Data Updated",
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
