let cpus
let memory
let disk
let dartfs
let sysadmin

function price_calculation(cpus, memory, disk, dartfs, sysadmin) {
    const cost_per_cpu = 80;
    const cost_per_gb_memory = 40;
    const cost_per_gb_disk = 2.5;
    const cost_per_tb_dartfs = 95;
    const sysadmin_cost = 200;
    let total_cost = 0;
    if (cpus) {
        total_cost += cost_per_cpu * cpus;
    }
    if (memory) {
        total_cost += cost_per_gb_memory * memory;
    }
    if (disk) {
        total_cost += cost_per_gb_disk * disk;
    }
    if (dartfs) {
        total_cost += cost_per_tb_dartfs * dartfs;
    }
    if (sysadmin) {
        total_cost += sysadmin_cost;
    }
    return total_cost;
};

function form_submitted() {
    cpus = Number(document.getElementById("CPUs").value);
    memory = Number(document.getElementById("memory").value);
    disk = Number(document.getElementById("disk_space").value);
    dartfs = Number(document.getElementById("dartfs").value);
    sysadmin = Boolean(document.getElementById("sysadmin").checked);
    console.log(price_calculation(cpus, memory, disk, dartfs, sysadmin));
};

