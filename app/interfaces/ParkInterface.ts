import { AddressInterface } from "./AddressInterface";

export interface ParkInterface {
    id: number;
    name: string;
    topography: boolean;
    address: AddressInterface
}