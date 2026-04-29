let cpus = 80
let memory = 40
let disk = 2.5
let dartfs = 95
let sysadmin = 200

function price_calculation(cpus, memory, disk, dartfs, sysadmin) {
    let cpus_subtotal = 0;
    let memory_subtotal = 0;
    let disk_subtotal = 0;
    let dartfs_subtotal = 0;
    let sysadmin_subtotal = 0;

    if (cpus) {
        cpus_subtotal += cost_per_cpu * cpus;
        const cpus = Number(document.getElementById("cpus").value);
    }
    if (memory) {
        memory_subtotal += cost_per_gb_memory * memory;
        const memory = Number(document.getElementById("memory").value);
    }
    if (disk) {
        disk_subtotal += cost_per_gb_disk * disk;
        const disk = Number(document.getElementById("disk-space").value);
    }
    if (dartfs) {
        dartfs_subtotal += cost_per_tb_dartfs * dartfs;
        const dartfs = Number(document.getElementById("dartfs").value);
    }
    if (sysadmin) {
        sysadmin_subtotal = sysadmin
        const sysadmin = document.getElementById("sysadmin").checked;
    }
    }