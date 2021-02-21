const data = require('../../data');

// Lesson - Testing Numbers
describe('absolute', () => {
    it ('should return positive number if positive', ()=> {
        const result = data.absolute(1);
        expect(result).toBe(1);
    });
    it ('should return positive number if negative', ()=> {
        const result = data.absolute(-1);
        expect(result).toBe(1);
    });
    it ('should return zero number if zero', ()=> {
        const result = data.absolute(0);
        expect(result).toBe(0);
    });
});

// Lesson: Testing Stringa
describe('welcome', () => {
    it('should return welcome message', () => {
        const result = data.welcome('Adam');
        // expect(result).toBe('Hello Adam');   // not recommended
        expect(result).toMatch(/Adam/);      // using regex
        expect(result).toContain('Adam');    // using contains
    })
})

// Lesson: Testing Arrays 
describe('sizes', () => {
    it('should return available sizes', () => {
      const result = ['S','M','L'];
      expect(result).toEqual(expect.arrayContaining(['S','M','L']));
    })
})

// Lesson: Testing Objects
describe('getUser', () => {
    it('should return user of userId', () => {
      const result = data.getUser(1)
    //   expect(result).toBe({id:1, age:20});           // test fail
      expect(result).toMatchObject({id:1, age:20});  // pass test
      expect(result).toHaveProperty('id', 1);        // pass test
    })
})

// Lesson: Testing Exceptions
describe('regsiterUser', () => {
    it ('should throw error if email is falsy', ()=> {
        const args = [null, undefined, NaN, 0, '', false]; 
        args.forEach(a => {
            expect(()=>{data.registerUser(a)}).toThrow();
        });
    });
    it ('should return user if valid email', ()=> {
        const result = data.registerUser('adam@email.com');
        expect(result).toMatchObject({email: 'adam@email.com'});
    });
});

// Lesson: Creating Simple Mock Functions
const db = require('../../fakeDb');

describe('discount', () => {
  it('should apply 20% discount if points greater than 10', () => {
    db.getUser = function(userId) {
      return {id: userId, points:11};
    }
    const order = {userId:1, total:80};
    data.discount(order);
    expect(order.total).toBe(80)  })
})

// Lesson: Interaction Testing
const notification = require('../../notifications');

describe('notifyUser', () => {
  it('should notify to customer', ()=> {
    db.getUserEmail = function(userId){
      return {email: 'a'};
    } 
    
    let notified = false;
    notification.send = function(email, message) { 
      notified= true;
    }
    data.notifyUser({userId:1}); 
    expect(notified).toBe(true);  
  })
})

// Lesson: Jest Mock Functions
describe('notifyUser', () => {
  it('should notify to customer', ()=> {
    db.getUserEmail = jest.fn().mockReturnValue({email: 'a'});
    // db.getUserEmail = function(userId){
    //  return {email: 'a'};
    //} 
    notification.send = jest.fn();
    // let notified = false;
    // notification.send = function(email, message) { 
    //   notified= true;
    // }
    data.notifyUser({userId:1}); 
    // expect(notified).toBe(true);  
    expect(notification.send).toHaveBeenCalled();
  })
})