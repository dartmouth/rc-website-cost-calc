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

function loadFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    
    urlParams.forEach((value, key) => {
        const element = document.querySelector(`[name="${key}"]`);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = value === 'on';
            } else {
                element.value = value;
            }
        }
    });
    
    if (urlParams.toString()) {
        calculateAndDisplay();
    }
}

function calculateAndDisplay() {
    const cpus = Number(document.getElementById("cpus").value);
    const memory = Number(document.getElementById("memory").value);
    const disk = Number(document.getElementById("disk").value);
    const dartfs = Number(document.getElementById("dartfs").value);
    const sysadmin = document.getElementById("sysadmin").checked;
    
    const totalCost = price_calculation(cpus, memory, disk, dartfs, sysadmin);
    
    const resultElement = document.getElementById("result");
    resultElement.innerText = `Total Cost: $${totalCost}`;
    resultElement.style.display = "block";    
}

document.addEventListener("DOMContentLoaded", function() {
    loadFromURL();
    const form = document.querySelector('form');
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const urlParams = new URLSearchParams();
        for (let [key, value] of formData.entries()) {
            if (value) { 
                urlParams.append(key, value);
            }
        }
        
        const newURL = window.location.pathname + '?' + urlParams.toString();
        history.pushState(null, '', newURL);
        
        calculateAndDisplay();
    });
});
