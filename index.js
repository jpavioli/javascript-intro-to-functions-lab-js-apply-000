//recieve a [string] and return it in all caps
function shout(string){
  return string.toUpperCase()
}

//recieve a [string] and return it in all lower case
function whisper(string){
  return string.toLowerCase()
}

//recieve a [string] and output to consol log in all uppercase 
function logShout(string){
  console.log(string.toUpperCase())
}

//recieve a [string] and output to consol log in all lowercase 
function logWhisper(string){
  console.log(string.toLowerCase())
}

//function sayHiToGrandma
function sayHiToGrandma(string){
  if (string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
  else if (string === string.toLowerCase()){
    return "I can't hear you!"
  }
  else if (string === string.toUpperCase()){
    return "YES INDEED!"
  }
}