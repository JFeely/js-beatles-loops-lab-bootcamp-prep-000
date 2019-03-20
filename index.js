function theBeatlesPlay(musician, instrument){
  var array = []
  for (var i = 0; i < musician.length; i++){
    array.push(musician[i] + ' plays ' + instrument[i]);
  }
  return array
}

function johnLennonFacts (facts){
  var arrayFacts = [];
  var countdown = 0;
  while (countdown < facts.length){
    arrayFacts.push(facts[countdown] + '!!!');
    countdown++;
  }
  return arrayFacts
}