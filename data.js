
// Lesson: Testing Numbers
module.exports.absolute = function(number){
    if (number > 0) return number;
    if (number < 0) return -number;
    return 0;
}

// Lesson: Testing Stringa
module.exports.welcome = function(name){
    return 'Hello' + name;
}

// Lesson: Testing Arrays
module.exports.sizes = function() {
    return ['S','M','L'];
}

// Lesson: Testing Objects
module.exports.getUser = function(userId) {
    return {id: userId, age: 20 };
}

// Lesson: Testing Exceptions
module.exports.registerUser = function(email) {
    if (!email) throw new exception('Email required!');
    return {id: 1, email: email};
}


const db = require('./fakeDb');

// Lesson: Creating Simple Mock Functions
module.exports.discount = function(order){
    const customer = db.getUser(order.userId);
    if (customer.points > 10) 
        order.totalAmount *= 20;
}

// Lesson: Interaction Testing
const notification = require('./notifications');

module.exports.notifyUser = function(order){
   const customer = db.getUserEmail(order.userId);
   notification.send(customer.email, 'Order placed.');
}

// Lesson: Jest Mock Functions



