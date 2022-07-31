import { MinOwner } from "./Owner.interface"

export interface Dog{
    id?:string,
    name:string,
    nickname?:string,
    breed:string,
    img:string,
    observations:string[],
    careDays:DayCares[],
    conduct:string,
    owners:DogOwner
}

export interface DogOwner{
    mainOwner:MinOwner,
    secondaryOwner:MinOwner[]
}

export interface DayCares{
    entryDate:string,
    outDate:string
}