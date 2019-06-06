export class UserDto {
    readonly id: number
    readonly email: string;
    readonly nom: string;
    readonly prenom: string;
    readonly password: string;
    readonly pseudo: string;
    readonly tag: string;
    readonly avatar: string;
}

//(avatar: Buffer | File)