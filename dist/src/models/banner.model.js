import { model, Schema } from "mongoose";
const bannerSchema = new Schema({
    title: {
        type: String
    },
    paragraph: {
        type: String
    },
    button: {
        type: String
    },
    bg: {
        type: String
    }
});
const Banner = model('banners', bannerSchema);
export default Banner;
