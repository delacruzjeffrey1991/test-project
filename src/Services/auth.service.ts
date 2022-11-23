import { AxiosResponse } from 'axios'
import requests from '../Services/http.service';

const AuthServices = {
  login(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/signin`, body);
  },
  signup(body:any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/signup`, body);
  },
  logout(): Promise<AxiosResponse<any, any>> {
    return requests.get(`/auth/logout`);
  },
  businessAdd(body: any): Promise<AxiosResponse<any, any>> {
    return requests.post(`/business` , body);
  },
};

export default AuthServices;
