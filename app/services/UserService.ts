import { ModifyUserRequest } from '../interfaces/RequestBodies/ModifyUserRequest';
import { SecureStoreTool } from '../utils/SecureStoreTool';

export class UserService {
    
    baseUrl = "http://localhost:3000";

    public async getPersonalInfos()
    {
        const token = await SecureStoreTool.getItem("token");
        const userId = await SecureStoreTool.getItem("user_id");

        return await fetch(`${this.baseUrl}/api/customer/personal-infos/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
    }

    public async updateUserInfos(data: ModifyUserRequest)
    {
        const token = await SecureStoreTool.getItem("token");
        const userId = await SecureStoreTool.getItem("user_id");

        const body = JSON.stringify(data);
        return await fetch(`${this.baseUrl}/api/customer/personal-infos/${userId}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        },
        body: body
      })
    }
}