var reason = location.hash;
var fixed = reason.slice(1, 999);
var converted = fixed.replaceAll("%20", " ")
document.getElementById("reason").innerText = converted;
