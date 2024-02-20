import { AddressInterface } from "./AddressInterface";

export interface ParkInterface {
    id: number;
    name: string;
    topography: boolean;
    address: AddressInterface
}

export interface ParkData {
    parks: ParkInterface[];
    total_items: number;
}