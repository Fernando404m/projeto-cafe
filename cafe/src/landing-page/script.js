function copy(value) {
    var content = (value == "email") ? "fernando404m@gmail.com" : "55 19 971466370"
    navigator.clipboard.writeText(content).then(function() {
        alert("Texto copiado para a área de transferência!");
      }).catch(function(err) {
        console.error("Erro ao copiar o texto: ", err)
      })
}

function showMenu(show) {
  let pdf = document.getElementById("pdf")
  if (show) {
    pdf.style.display = "block"
  } else {
    pdf.style.display = "none"
  }
}