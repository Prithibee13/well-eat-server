import { Istory } from "../interfaces/story.interface"
import { model, Schema }  from "mongoose"


const storySchema = new Schema <Istory>({
    header : 
    {
        type : String
    },
    title :
    {
        type : String
    },
    paragraph1 : 
    {
        type: String
    },
    paragraph2 : 
    {
        type: String
    },
    button : 
    {
        type : String
    },
    img: {
        type: String
    }
})


const Story = model<Istory>("Story", storySchema)
export default Story

