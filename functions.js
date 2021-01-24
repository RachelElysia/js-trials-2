"use strict";


// 1. isHometown
function isHometown(town) {
    /*

    > isHometown('San Francisco')
    false
    > isHometown('San Jose')
    true

    */

    return (town === 'San Jose')
}

// 2. getFullName

function getFullName(firstName, lastName) {
    /*

    > getFullName('Rachel', 'Perkins')
    'Rachel Perkins'

    */

    return (firstName + " " + lastName)
}

// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
    /*

    > calculateTotal(100, 'MA')
    106
    > calculateTotal(100, 'CA', 0.07)
    110.21
    > calculateTotal(100, 'WA', 0.04)
    104
    
    */
    let subtotal = basePrice * (1 + tax);

    let fee = 0;

    if (state == 'CA') {
        fee = 0.03 * subtotal;
    }
    if (state == 'PA') {
        fee = 2;
    }
    if (state == 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }

    return subtotal + fee
    }


