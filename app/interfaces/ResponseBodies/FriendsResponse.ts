export interface FriendsResponse {
    total_items: number;
    friends: Friend[];
}

export interface Friend {
    id: number;
    pseudo: string;
    firstName: string;
    lastName: string;
}

export interface PendingRequestsResponse {
  total_items: number;
  requests: PendingRequest[];
}
export interface PendingRequest {
    id: number;
    id_user: number;
    send: boolean;
    pseudo: string;
    firstName: string;
    lastName: string;
}
