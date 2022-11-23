"use strict" 

const billAmount = document.getElementById('bill-amount');
const serviceLevel = document.getElementById('service-select');
const customTip = document.getElementById('custom-tip');
const resultContainer = document.getElementById('result-container');
const tipAmount = document.getElementById('tip-amount');
const billTotal = document.getElementById('bill-total');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    resultContainer.style.display = 'flex';
    getCustomTip();
    getTipAmount();
});

function getTipAmount() {
    let tip;
    if (serviceLevel.value === '10') {
        tip = (+billAmount.value / 100) * 10;
        tipAmount.innerText = `Tip Amount: ${tip}`;
        billTotal.innerText = `Bill Total: ${+billAmount.value + tip}`;
    } else if (serviceLevel.value === '15') {
        tip = (+billAmount.value / 100) * 15;
        tipAmount.innerText = `Tip Amount: ${tip}`;
        billTotal.innerText = `Bill Total: ${+billAmount.value + tip}`;
    } else if (serviceLevel.value === '20') {
        tip = (+billAmount.value / 100) * 20;
        tipAmount.innerText = `Tip Amount: ${tip}`;
        billTotal.innerText = `Bill Total: ${+billAmount.value + tip}`;
    } else if (serviceLevel.value === '25') {
        tip = (+billAmount.value / 100) * 25;
        tipAmount.innerText = `Tip Amount: ${tip}`;
        billTotal.innerText = `Bill Total: ${+billAmount.value + tip}`;
    }; 
};

function getCustomTip() {
    let tip = (+billAmount.value / 100) * (+customTip.value);
    tipAmount.innerText = `Tip Amount: ${tip}`;
    billTotal.innerText = `Bill Total: ${+billAmount.value + tip}`;
    }

serviceLevel.addEventListener('change', () => {
    if (serviceLevel.value === 'custom') {
        customTip.style.display = 'block';
    };
});

serviceLevel.addEventListener('change', () => {
    if (serviceLevel.value === '10' || serviceLevel.value === '15' || serviceLevel.value === '20' || serviceLevel.value === '25') {
        customTip.style.display = 'none';
    };
});

