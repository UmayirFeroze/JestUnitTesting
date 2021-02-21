// Lesson: Creating Simple Mock Functions
module.exports.getUser = function(userId){
    console.log('Retreiving user from database...');
    return {id: userId, points:11};
}

// Lesson: Interaction Testing
module.exports.getUserEmail = function(userId){
    console.log('Retreiving user from database...');
    return {email: 'a'};
}