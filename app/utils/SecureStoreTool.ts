import * as SecureStore from 'expo-secure-store';

export class SecureStoreTool
{
    static async save(key: string, value: string)
    {
        await SecureStore.setItemAsync(key, value);
    }
    static async delete(key: string)
    {
        await SecureStore.deleteItemAsync(key);
    }

    static async getItem(key: string)
    {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            return result
        }else {
            return false;
        }
    }
}