import { ModifyUserInterface } from '../interfaces/RequestBodies/ModifyUserInterface';
import { SecureStoreTool } from '../tools/SecureStoreTool';

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

    public async updateUserInfos(data: ModifyUserInterface)
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