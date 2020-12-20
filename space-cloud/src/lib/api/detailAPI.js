import axios from 'axios';

const url = 'http://52.79.176.233:3000';

const getDetailInfo = async (postId) => {
    try {
        const { data } = await axios.get(`${url}/post/detail/${postId}`);
        console.log('[SUCCESS] GET getDetailInfo', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET getDetailInfo', e);
        throw e;
    }
};

const getFloatingInfo = async (postId) => {
    try {
        const { data } = await axios.get(`${url}/post/detail/${postId}/select`);
        console.log('[SUCCESS] GET getFloatingInfo', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET getFloatingInfo', e);
        throw e;
    }
};

const getBannerInfo = async () => {
    try {
        const { data } = await axios.get(`${url}/banner`);
        console.log('[SUCCESS] GET getBannerInfo', data);
        return data.data;
    } catch (e) {
        console.error('[FAIL] GET getBannerInfo', e);
        throw e;
    }
};

const detailAPI = {
    getDetailInfo,
    getFloatingInfo,
    getBannerInfo
}

export default detailAPI;