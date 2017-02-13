$(document).ready(function(){

function addYears(personArray) {
  var addYears = 0;
  for (var i = 0; i < personArray.length; i++) {
    var name = personArray[i].name;
    var years = personArray[i].yearsOfExperience;
    addYears += personArray[i].yearsOfExperience;
    addYears = parseInt(addYears);
    $('tbody').append('<tr><td>' + name + '</td><td>' + years + '</td></tr>');
  }

  return addYears;
}

console.log(addYears([{ name: 'Tony', yearsOfExperience: 10 }, { name: 'Carla', yearsOfExperience: 4 }, { name: 'Kris', yearsOfExperience: 14 }]));

});
