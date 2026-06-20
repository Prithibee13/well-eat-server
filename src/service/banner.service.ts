import mongoose from "mongoose"
import Banner from "../models/banner.model"
import type { Ibanner } from "../interfaces/banner.interface"

export const getBannerService = async() => 
{
    const result = await Banner.find({})
    return result 
}

export const updateBannerService = async(id: mongoose.Types.ObjectId, payload : Ibanner)=>
{
    const result = await Banner.findByIdAndUpdate(
        id,
        payload,
        {
            new : true
        },
    )

    return result
}