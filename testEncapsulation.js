function Person(name) {
  //properties/fields
  var name = name;
  var height = 68;
  var weight = 170;
  var socialInsuranceNumber = "555 555 555";
  Person.prototype.baseURL = `https://google.co.in`
  return {
    setHeight: function(newHeight) {height=newHeight;},
    getBaseURL : function(){ return Person.prototype.baseURL},
    getHeight: function() { return height; },
    setWeight: function(newWeight) {weight = newWeight;},
    getWeight: function() { return weight; },
    setName:   function(newName) {name=newName;},
    getName:   function() { return name; },
    setSocialInsuranceNumber: function(newSocialInsuranceNumber) { socialInsuranceNumber=newSocialInsuranceNumber; }
  };
}



module.exports = Person;