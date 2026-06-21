import mongoose from "mongoose"
import Nav from "../models/nav.model.ts"
import type { Inav } from "../interfaces/nav.interface.ts"

export const getNavService = async() => 
{
    const result = await Nav.find({})
    return result 
}

export const updateNavService = async(id: mongoose.Types.ObjectId, payload : Inav)=>
{
    const result = await Nav.findByIdAndUpdate(
        id,
        payload,
        {
            new : true
        },
    )

    return result
}