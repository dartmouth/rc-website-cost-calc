let cpus
let memory
let disk
let dartfs
let sysadmin

function form_submitted() {
    cpus = document.getElementById("CPUs").value;
    memory = document.getElementById("memory").value;
    disk = document.getElementById("disk_space").value;
    disk = Number(disk)
    console.log(typeof disk === "number");
    dartfs = document.getElementById("dartfs").value;
    sysadmin = document.getElementById("sysadmin").checked;
};
