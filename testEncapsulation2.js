function Person2(name) {
  //properties/fields
  var name = 'blah';
  var height = 68;
  var weight = 170;
  var socialInsuranceNumber = "555 555 555";
  Person2.prototype.baseURL = `https://google.co.in`
  return {
    function(name){
    setHeight =  function(newHeight) {height=newHeight;}
    getBaseURL = function(){ return Person2.prototype.baseURL}
    getHeight = function() { return height; }
    setWeight = function(newWeight) {weight = newWeight;}
    getWeight =  function() { return weight; }
    setName =  function(newName) {name=newName;}
    getName =  function() { return name; }
    setSocialInsuranceNumber= function(newSocialInsuranceNumber) { socialInsuranceNumber=newSocialInsuranceNumber; }
    }
  };
}


function testPerson(name){
  name = null
  function testPerson1(name){
    console.log("in testPerson1")
    setName(name)
  }

  function setName(setName){
    console.log("in setName")
    name = setName
  }
  return testPerson1

}



module.exports = testPerson;