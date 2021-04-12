if (location.hash.length > 0) {
var reason = location.hash;
var fixed = reason.slice(1, 999);
var converted = fixed.replaceAll("%20", " ")
document.getElementById("reason").innerText = converted;
}else{
document.getElementById("reason").innerText = "No reason provided.";
}

var cookiez = document.cookie;
  if (cookiez == '') {
    location.replace(`https://lankybox01.leahcimto.com/`);
}
