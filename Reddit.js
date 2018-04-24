const Question = require('./Question')
const fetch = require('node-fetch')
function RedditQuestion(domain){
  //this.domain = domain
  Question.call(this, domain)
}

RedditQuestion.prototype = Object.create(Question)

RedditQuestion.prototype.baseURL = `https://www.reddit.com/r/php`

RedditQuestion.prototype.searchURL = `/search.json?q=`

RedditQuestion.prototype.getQuestions = function(){
  console.log(this.baseURL + this.searchURL + this.domain)
  return fetch( this.baseURL + this.searchURL + this.domain )
    .then(res => { return res.json()})
    .then(res => { console.log(res);   return res})

  //return Question.protoype.getQuestions(this.baseURL + this.searchURL + this.domain)
}

module.exports = RedditQuestion