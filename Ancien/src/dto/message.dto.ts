export class MessageDto {
    readonly id: number
    readonly group_id: number;
    readonly friend_id: number;
    readonly sender_id: number;
    readonly message: string;
    readonly created_at: Date;

}