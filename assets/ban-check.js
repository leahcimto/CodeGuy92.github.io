function reload() {
var username = document.getElementById("usename").value;
location.replace(window.location.href + "#" + username);
window.location.reload();
}

if (location.hash == '#LankyBox01') {
location.replace(`https://codeguy92.github.io/website/ban#You were banned for testing purposes.`);
}
