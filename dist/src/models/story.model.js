import { model, Schema } from "mongoose";
const storySchema = new Schema({
    header: {
        type: String
    },
    title: {
        type: String
    },
    paragraph1: {
        type: String
    },
    paragraph2: {
        type: String
    },
    button: {
        type: String
    },
    img: {
        type: String
    }
});
const Story = model("Story", storySchema);
export default Story;
