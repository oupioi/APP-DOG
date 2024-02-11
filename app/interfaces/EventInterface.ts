import { AddressInterface } from "../interfaces/AddressInterface";
export interface EventInterface {
    id?: Number;
    title: string;
    description: string;
    maxPeople: number;
    followers: number;
    closed: boolean;
    public: boolean;
    date: Date;
    address: AddressInterface;
    tabUser: number[];
}

export interface EventData {
    events: EventInterface[];
    total_items: number;
  }