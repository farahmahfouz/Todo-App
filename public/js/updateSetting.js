import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    console.log(res)
    
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updating successfuly`);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};
