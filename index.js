// (1) Mostrar mensagem "Olá Mundo"
document.getElementById("showMessage").addEventListener("click", function() {
    alert("Olá Mundo!");
  });
  
  // (2) Soma de dois inteiros
  document.getElementById("sumButton").addEventListener("click", function() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const sum = num1 + num2;
    document.getElementById("sumResult").textContent = `Resultado: ${sum}`;
  });
  
  // (3) Alterar propriedade por ID
  document.getElementById("changeById").addEventListener("click", function() {
    const element = document.getElementById("elementById");
    element.style.color = "red";
    element.textContent = "Texto alterado pelo ID!";
  });
  
  // (4) Alterar propriedade por Name
  document.getElementById("changeByName").addEventListener("click", function() {
    const element = document.getElementsByName("elementByName")[0];
    element.style.backgroundColor = "yellow";
    element.textContent = "Texto alterado pelo Name!";
  });
  
  // (5) Alterar propriedade por Class
  document.getElementById("changeByClass").addEventListener("click", function() {
    const element = document.getElementsByClassName("elementByClass")[0];
    element.style.fontWeight = "bold";
    element.textContent = "Texto alterado pela Class!";
  });
  