import { Dog } from "./dog.interface";

export const DOG_EXAMPLES:Dog[] = [
    {
        name:'LOKI',
        breed:'Husky',
        img:'https://st2.depositphotos.com/1594920/7178/i/950/depositphotos_71786535-stock-photo-siberian-husky-2-years-old.jpg',
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
        },
        conduct:'Excelente'
    },
    {
        name:'Siro',
        breed:'Bichón Maltes',
        img:'https://mibichonmaltes.com/wp-content/uploads/2022/02/bichon-maltes-europeo.jpg',
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
        },
        conduct:'Excelente'
    },
]