// event listener
document.getElementById("btn").addEventListener("click", gradecalc);

//function
function gradecalc() {
  //input
  let essay = +document.getElementById("essay").value;
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let pp1 = +document.getElementById("posp").value;
  let st1 = +document.getElementById("test").value;
  let st2 = +document.getElementById("test2").value;
  let st3 = +document.getElementById("test3").value;
  //process
  let finalgrade = (essay + pp1 + sp1 + sp2 + st1 + st2 + st3) / 7;

  //testing
  console.log(finalgrade);

  //output
  document.getElementById("endgrade").innerHTML = finalgrade;
  finalgrade = finalgrade.toFixed(0);
  if (finalgrade < 50) {
    document.getElementById("endgrade").innerHTML =
      "you are failing the class :( " + finalgrade + "%";
  }

  if (finalgrade >= 80) {
    document.getElementById("endgrade").innerHTML =
      "you have an A in this class :) " + finalgrade + "%";
  }

  if (finalgrade > 100) {
    document.getElementById("endgrade").innerHTML = "NAN ";
  }
}
