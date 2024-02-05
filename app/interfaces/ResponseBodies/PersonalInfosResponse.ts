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
    birthdate: Date;
    notifyFriends: boolean;
    sex: SexInterface;
    address: AddressInterface;
    dogs: DogInterface[];
}