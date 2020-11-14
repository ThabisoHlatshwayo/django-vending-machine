function validateForm() {
    //validating the money field
  var money_inserted = document.forms["my_form"]["money"].value;
  if (money_inserted == "") {
    alert("Please insert a note");
    return false;
  }
  else if (money_inserted >= 200) {
    alert("R200 is the maximum note allowed");
    return false; 
  }
  //validating the item field
  var item_chosen = document.forms["my_form"]["item"].value;
  if (item_chosen == ""){
      alert("Please enter the name of an item");
      return false;
  }
  var rand = document.forms["my_form"]["money"].value;
  var choose = document.forms["my_form"]["item"].value;
  if (choose == "flake" || choose == "Flake"){
    if(rand <= 29){
      alert("Please insert R30 or more to continue buying Flake.")
    }
    return true;
  }else if(choose == "wispa" || choose == "Wispa"){
    if(rand <= 39){
      alert("Please insert R40 or more to continue buying Wispa.")
    }
    return true;
  }else if(choose =="crunchie" || choose == "Crunchie"){
    if(rand <= 59){
      alert("Please insert R60 or more to continue buying Crunchie.")
    }
    return true;
  }else if(choose == "milky way" || choose == "Milky way" || choose == "Milky Way"){
    if(rand <= 49){
      alert("Please insert R50 or more to continue buying Milky way.")
    }
    return true;
  }else if(choose == "boost" || choose == "Boost"){
    if(rand <= 19){
      alert("Please insert R20 or more to continue buying Boost.")
    }
    return true;
  }else{
    alert("Wrong item selected. Please try again!!!");
    return false;
  }
}