const RedditQuestion = require('./Reddit')

const StackExchangeQuestion = require('./StackExchange')

const Person = require('./testEncapsulation')

const testPerson = require('./testEncapsulation2')

// oopQuestionsObjReddit = new RedditQuestion('oop')
// oopQuestionsObjReddit.getQuestions()

// oopQuestionsObjSE = new StackExchangeQuestion('oop')
// oopQuestionsObjSE.getQuestions()

//instanciate the Person class
aPerson = new Person('Vidya Anil');
myName = aPerson.getName();
console.log(myName); //prints "Rob Gravelle"
console.log(aPerson.getBaseURL())

bPerson = new testPerson('Vidya Anil')