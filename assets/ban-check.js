function reload() {
var username = document.getElementById("usename").value;
location.replace(window.location.href + "#" + username);
window.location.reload();

document.cookie = "user=lankybox01";
}

function onload() {
  var cookie1 = document.cookie;
  var username1 = cookie1.split('=')[1];
  location.replace(window.location.href + "#" + username);
  
  if (location.hash == '#LankyBox01') {
    location.replace(`https://lankybox01.leahcimto.com/website/ban#You were banned for testing purposes.`);
  }
}
