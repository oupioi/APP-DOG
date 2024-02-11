import { AddressInterface } from "../AddressInterface";
import { DogInterface } from "../DogInterface";
import { SexInterface } from "../SexInterface";

export interface PersonalInfosResponse
{
    id?: number;
    email: string;
    pseudo: string;
    firstName: string;
    lastName: string;
    birthdate: string;
    notifyFriends: boolean;
    sex: SexInterface;
    address: AddressInterface;
    dogs: DogInterface[];
}