import { model, Schema } from "mongoose";
const navSchema = new Schema({
    brand: {
        type: String
    },
    links: {
        type: [
            {
                links: String
            }
        ]
    }
});
const Nav = model("navs", navSchema);
export default Nav;
