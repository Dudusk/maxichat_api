export class FriendDto {
    readonly id: number
    readonly id_user_1: number;
    readonly id_user_2: number;
    readonly status: 'waiting' | 'accepted';
}