export interface Password {
    id:string
    password:string;
    message:string;
    encrypt:boolean;
}

export interface PasswordMutation {
    password:string;
    message:string;
    encrypt?:boolean;
}

export interface Pin {
    pinCode:string;
}
