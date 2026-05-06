function loadFromURL() {
  const urlParams = new URLSearchParams(window.location.search);

  const cpus = Number(urlParams.get("cpus")) || 0;
  const memory = Number(urlParams.get("memory")) || 0;
  const disk = Number(urlParams.get("disk")) || 0;
  const dartfs = Number(urlParams.get("dartfs")) || 0;
  const sysadmin = urlParams.get("sysadmin") === "on";

  // Pricing constants
  const cost_per_cpu = 80;
  const cost_per_gb_memory = 40;
  const cost_per_gb_disk = 2.5;
  const cost_per_tb_dartfs = 95;
  const sysadmin_cost = 200;

  // Subtotals
  const cpus_subtotal = cpus * cost_per_cpu;
  const memory_subtotal = memory * cost_per_gb_memory;
  const disk_subtotal = disk * cost_per_gb_disk;
  const dartfs_subtotal = dartfs * cost_per_tb_dartfs;
  const sysadmin_subtotal = sysadmin ? sysadmin_cost : 0;

  const compute_subtotal = cpus_subtotal + memory_subtotal;
  const storage_subtotal = disk_subtotal + dartfs_subtotal;
  const services_subtotal = sysadmin_subtotal;
  const total = compute_subtotal + storage_subtotal + services_subtotal;

  return {
    cpus,
    memory,
    disk,
    dartfs,
    sysadmin,
    cpus_subtotal,
    memory_subtotal,
    disk_subtotal,
    dartfs_subtotal,
    sysadmin_subtotal,
    compute_subtotal,
    storage_subtotal,
    services_subtotal,
    total,
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const values = loadFromURL();

  // Students fill these in — straightforward DOM manipulation
  document.getElementById("cpus-qty").innerText = values.cpus;
});
