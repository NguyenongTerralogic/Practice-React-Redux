import Axios from 'axios';

export const GET_USER_LIST = "GET_USER_LIST";

export const saveUserList = () => {
    return(dispatch) => {
    Axios({
        method:'GET',
        url:('https://jsonplaceholder.typicode.com/users')
    }).then(res => {
        dispatch(actGetUserList(res.data));
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    })
}}
export const actGetUserList = (UserList) => {
  return {
    type: GET_USER_LIST,
    UserList,
  };
};
