import React from "react";

export default React.createContext({
    people: [        
        {
            id: 'joe',
            name: 'joe adams',
            handle: '@joe-joe'
        },
        {
            id: 'tony',
            name: 'tony stark',
            handle: '@ironman'
        },
        {
            id: 'cap',
            name: 'steve rogers',
            handle: '@captain_america'
        },        
    ],
    updatePeople: (updatedPeople) => {}        
})