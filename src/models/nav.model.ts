import type { Inav } from '../interfaces/nav.interface.ts';
import { model, Schema } from "mongoose";


const navSchema = new Schema <Inav>({
    brand : {
        type: String
    },
    links : {
        type : [
            {
                links : String
            }
        ]
    }
})

const Nav = model<Inav>("navs", navSchema)

export default Nav