const Question = require('./Question')
const fetch = require('node-fetch')
function StackExchangeQuestion(domain){
  Question.call(this, domain)
}

StackExchangeQuestion.prototype.baseURL = `https://api.stackexchange.com`

StackExchangeQuestion.prototype.getQuestions = function(){
  return fetch( this.baseURL + `/2.2/search?order=desc&sort=activity&tagged=${StackExchangeQuestion.prototype.domain}&site=stackoverflow` )
    .then(res => { return res.json()})
    .then(res => { console.log(res);   return res})

  //return Question.protoype.getQuestions(this.baseURL + `/2.2/search?order=desc&sort=activity&tagged=${StackExchangeQuestion.prototype.domain}&site=stackoverflow`)
}


module.exports = StackExchangeQuestion