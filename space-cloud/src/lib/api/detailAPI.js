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

const detailAPI = {
    getDetailInfo,
    getFloatingInfo
}

export default detailAPI;