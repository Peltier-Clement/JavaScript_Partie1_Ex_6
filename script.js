function valider(){
  var nbr1 = document.getElementById("nbr1").value;
  var nbr2 = document.getElementById("nbr2").value;
  if (isNaN(nbr1) == false && isNaN(nbr2) == false && nbr2 != 0){
  var result = nbr1 % nbr2;
      alert('le résultat est : ' + result);
  }
  else{
    alert('Veuillez saisir un nombre');
  }
}
