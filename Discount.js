const timmy = {
    name: "Timmy",
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    name: "Sarah",
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    name: "Rocky",
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// If the customer has a subscription, they get a 25% discount after 
//their the refill total has been calculated.

// If the customer has a coupon, they get a 10% discount after the 
//subscription discount has been calculated.

// At the end of script, you should return and log the string "Your Grand Total is ${finalTotal}."



function calculateTotal(customer) { 
    //defining variables
    const refillTotal = customer.pricePerRefill * customer.refills;
    let finalTotal = refillTotal;

    if (customer.subscription) {
        finalTotal *= 0.75; // applies 25% discount to the final total with subscription
    }
    if (customer.coupon) {
        finalTotal -= 10; // applies 10% discount to the final total with coupon
    }
    console.log(`${customer.name}` + " => " + `Your grand total is ${finalTotal}.`);
}

calculateTotal(timmy);
