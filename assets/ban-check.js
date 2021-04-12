function reload() {
var username = document.getElementById("usename").value;
location.replace(window.location.href + "#" + username);
window.location.reload();
}

if (location.hash == 'LankyBox01') {
location.replace(`https://codeguy92.github.io/website/ban#Sending too many requests.`);
}
if (location.hash == 'Jeffalo') {
location.replace(`https://codeguy92.github.io/website/ban#Being too advanced at coding. I don't know if that's even a valid ban reason, LOL!`);
}
