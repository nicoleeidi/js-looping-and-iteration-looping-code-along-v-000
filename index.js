// Code your solutions in this file
function printBadges(array=['Ada', 'Brendan', 'Ali']){
  for (let i=0; i < array.length; i++){
    console.log ("LOG: Welcome " + array[i] + "! You are employee #" + i + ".")
  }
}
function tailsNeverFails(){
  counter= 1
  while (Math.random() >= 0.5 == true){
    result= "You got" + counter + " tails in a row!"
  }
  if (result != null){
    return result
  }
  else {
    return "You got 0 tails in a row!"
  }


}
