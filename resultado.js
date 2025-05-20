  const queryResult = localStorage.getItem("queryResult")
  function changeInfo(whtv){
  const menuSugerido = document.getElementById("menu-sugerido");
  menuSugerido.innerHTML = whtv.suggestedInfo.menuSug
  console.log(whtv + " and " + menuSugerido.innerHTML)
  }
  changeInfo(queryResult)
  console.log(queryResult)
  const menuPrecio = document.getElementById("menu-precio")
  menuPrecio.innerHTML = "nothing"