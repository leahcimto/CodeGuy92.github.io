function reload() {
var username = document.getElementById("usename").value;
location.replace(window.location.href + "#" + username);
window.location.reload();

  if (username == "LankyBox01") {
    document.cookie = "banned=true; expires=Thu, 1 Dec 2022 12:00:00 UTC";
  }
  if (username == "leahcimto") {
    document.cookie = "banned=true; expires=Thu, 1 Dec 2022 12:00:00 UTC";
  }
}

function onload() {
  var cookiez = document.cookie;

  if (cookiez == 'banned=true') {
    location.replace(`https://lankybox01.leahcimto.com/ban`);
  }
}
