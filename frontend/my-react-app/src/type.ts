
export interface PasswordMutation {
    password:string;
    message:string;
    encrypt?:boolean;
}

export interface Pin {
    id:string
    pinCode:string;
}
