import type { Ibanner } from "../interfaces/banner.interface"
import { model, Schema }  from "mongoose"


const bannerSchema = new Schema <Ibanner>({
    title :
    {
        type : String
    },
    paragraph : 
    {
        type: String
    },
    button : 
    {
        type : String
    },
    bg: {
        type: String
    }
})

const Banner = model<Ibanner>('banners', bannerSchema)

export default Banner

