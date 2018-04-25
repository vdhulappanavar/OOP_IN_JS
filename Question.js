const fetch = require('node-fetch')


function Question(domain){
  this.domain = domain
  //return
}

Question.prototype.getQuestions = function(){
  // return fetch(url)
  //   .then(res => res.json())
  //   .then(res => res)

  return "question"
}


module.exports = Question