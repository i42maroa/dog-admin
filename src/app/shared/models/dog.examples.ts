import { Dog } from "./dog.interface";

export const DOG_EXAMPLES:Dog[] = [
    {
        name:'LOKI',
        breed:'Husky',
        careDays:[
            {
                entryDate:'12-02-2022',
                outDate:'24-05-2022'
            }
        ],
        observations:[
            'Es un amor'
        ],
        owners:{
            mainOwner:{
                name:'Pedro'
            },
            secondaryOwner:[]
        }
    },
    {
        name:'Siro',
        breed:'Bichón Maltes',
        careDays:[
            {
                entryDate:'12-02-2022',
                outDate:'24-05-2022'
            }
        ],
        observations:[
            'Es un golfo'
        ],
        owners:{
            mainOwner:{
                name:'Manoli'
            },
            secondaryOwner:[]
        }
    },
]