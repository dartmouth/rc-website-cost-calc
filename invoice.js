let cpus
let memory
let disk
let dartfs
let sysadmin

function price_calculation(cpus, memory, disk, dartfs, sysadmin) {
    let cpus_subtotal = 0;
    let memory_subtotal = 0;
    let disk_subtotal = 0;
    let dartfs_subtotal = 0;
    let sysadmin_subtotal = 200;

    if (cpus) {
        cpus_subtotal += cost_per_cpu * cpus;
    }
    if (memory) {
        memory_subtotal += cost_per_gb_memory * memory;
    }
    if (disk) {
        disk_subtotal += cost_per_gb_disk * disk;
    }
    if (dartfs) {
        dartfs_subtotal += cost_per_tb_dartfs * dartfs;
    }
