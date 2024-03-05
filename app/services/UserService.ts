import { LoginRequest } from '../interfaces/RequestBodies/LoginRequest';
import { ModifyUserRequest } from '../interfaces/RequestBodies/ModifyUserRequest';
import { ErrorResponse } from '../interfaces/ResponseBodies/ErrorResponse';
import { FriendsResponse, PendingRequestsResponse } from '../interfaces/ResponseBodies/FriendsResponse';
import { LoginResponse } from '../interfaces/ResponseBodies/LoginResponse';
import { PersonalInfosResponse } from '../interfaces/ResponseBodies/PersonalInfosResponse';
import { SecureStoreTool } from '../utils/SecureStoreTool';
import axios from 'axios';

export class UserService {

    baseUrl = "http://localhost:3000";

    public async getPersonalInfos()
    {
      try {
        const response = await axios.get<PersonalInfosResponse>(`${this.baseUrl}/api/customer/personal-infos/:userId`, {headers: {requiresAuth: true}});
        return response.data;
      } catch (error) {
        throw error as ErrorResponse;
      }
    }

    public async updateUserInfos(data: ModifyUserRequest)
    {
      try {
        const response = await axios.put(`${this.baseUrl}/api/customer/:userId`, data, {headers: {requiresAuth: true}});
        return response.data;
      } catch (error) {
        throw error as ErrorResponse;
      }
    }

    public async login(data: LoginRequest)
    {
      try {
        const response = await axios.post<LoginResponse>(`${this.baseUrl}/api/customer/login`, {email: data.email, password: data.password});

        await SecureStoreTool.save('token', response.data.token);
        await SecureStoreTool.save('user_id', response.data.user_id.toString());

        return response.data;
      } catch (error) {
        throw error as ErrorResponse;
      }
    }

    public async disconnect()
    {
      await SecureStoreTool.delete('token');
      await SecureStoreTool.delete('user_id');
    }

    public async getFriends()
    {
      try {
        const response = await axios.get<FriendsResponse>(`${this.baseUrl}/api/customer/:userId/friends`, {headers: {requiresAuth: true}});
        return response.data;
      } catch(error) {
        throw error as ErrorResponse;
      }
    }
    public async getFriendRequests()
    {
      try {
        const response = await axios.get<PendingRequestsResponse>(`${this.baseUrl}/api/customer/:userId/requests`, {headers: {requiresAuth: true}});
        return response.data;
      } catch(error) {
        throw error as ErrorResponse;
      }
    }
}
