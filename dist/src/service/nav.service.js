import Nav from "../models/nav.model.js";
export const getNavService = async () => {
    const result = await Nav.find({});
    return result;
};
export const updateNavService = async (id, payload) => {
    const result = await Nav.findByIdAndUpdate(id, payload, {
        new: true
    });
    return result;
};
