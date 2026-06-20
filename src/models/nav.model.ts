import type { Inav } from '../interfaces/nav.interface';
import { model, Schema } from "mongoose";


const navSchema = new Schema <Inav>({
    brand : {
        type: String
    },
    links : {
        type : [String]
    }
})

const Nav = model<Inav>("nav", navSchema)

export default Nav