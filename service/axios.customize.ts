import axios from "axios";

const instance = axios.create({
  baseURL: (import.meta as any).env.VITE_BACKEND_URL,
});

//  thường dừng để nhét token vào header 
instance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  },
);


//  can thiệp vào request trước khi gửi lên server 
// Add a response interceptor
instance.interceptors.response.use(
  //  trường hợp mà api trả  về 200

  function (response) {
        // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    if(response && response.data){
        return response.data

    }




    
    return response;
  },
  function (error) {

    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error

    if(error && error.response) {


      return error.response.data
      

    }
    return Promise.reject(error);
  },
);

export default instance