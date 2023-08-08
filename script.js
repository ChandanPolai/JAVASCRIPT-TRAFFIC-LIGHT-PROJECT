function clear(id){
    document.getElementById("stop").style.background = "#333";
    document.getElementById("ready").style.background = "#333";
    document.getElementById("go").style.background = "#333";
  }  
  function stop(){
    clear();
    document.getElementById("stop").style.background = "red";
  }
  function ready(){
    clear();
    document.getElementById("ready").style.background = "yellow";
  }
  function go(){
    clear();
    document.getElementById("go").style.background = "green";
  }