import { AddressInterface } from "../AddressInterface";
import { SexInterface } from "../SexInterface";

export interface ModifyUserRequest
{
    id: number;
    email: string;
    pseudo: string;
    password?: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    notifyFriends: boolean;
    sex: SexInterface;
    address: AddressInterface;
}