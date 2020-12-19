import axios from 'axios';

const url = 'http://52.79.176.233:3000';

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
    getFloatingInfo,
    //detail 관련 API 추가하시면 됩니다
}

export default detailAPI;