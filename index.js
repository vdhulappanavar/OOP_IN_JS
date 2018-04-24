const RedditQuestion = require('./Reddit')

const StackExchangeQuestion = require('./StackExchange')

oopQuestionsObjReddit = new RedditQuestion('oop')
oopQuestionsObjReddit.getQuestions()

oopQuestionsObjSE = new StackExchangeQuestion('oop')
oopQuestionsObjSE.getQuestions()