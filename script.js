let cpus
let memory
let disk
let dartfs
let sysadmin

document.addEventListener("submit", function(event) {
    event.preventDefault();
    cpus = document.getElementById("CPUs").value;
    console.log(cpus)
});
