export interface AlertInterface {
    id: number;
    title: string;
    content: string;
    zip_code: number;
    created_at: Date;
}

export interface AlertData {
    alerts: AlertInterface[];
    total_items: number;
}