import axios from 'axios';

const getLocationInfo = async () => {
  try {
    const res = await axios.get('https://api.ipify.org');
    return res.data;
  } catch (error) {
    console.error('위치 정보를 가져오는데 실패했습니다:', error);
    return '';
  }
};

export default getLocationInfo;
