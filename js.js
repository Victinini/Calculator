let exprecion = "";

document.querySelector(".NumberContanier").onclick = (e) => {
  let target = e.target;

  if (target.classList.contains("number")) {
    exprecion += target.innerHTML;
    document.querySelector("input").value = exprecion;
  } else if (target.classList.contains("operation")) {
    let lastChar = exprecion[exprecion.length - 1];
    let operators = ["+", "-", "*", "/"];
    if (operators.indexOf(lastChar) != -1) {
      console.log(lastChar);
      alert("Invalied exprassion");
      // exprecion = exprecion.replace(/.$/, ""); 
    } else {
      exprecion += target.innerHTML;
      document.querySelector("input").value = exprecion;
    }
  } else if (target.classList.contains("reset")) {
    exprecion = "";
    document.querySelector("input").value = exprecion;
    
  } 

  
};

document.querySelector(".solve").onclick = () =>{
  let solve = eval(exprecion);
    exprecion = "";
    console.log(solve);
    document.querySelector("input").value = solve;
}
