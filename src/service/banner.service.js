import Banner from "../models/banner.model.ts";
export const getBannerService = async () => {
    const result = await Banner.find({});
    return result;
};
export const updateBannerService = async (id, payload) => {
    const result = await Banner.findByIdAndUpdate(id, payload, {
        new: true
    });
    return result;
};
