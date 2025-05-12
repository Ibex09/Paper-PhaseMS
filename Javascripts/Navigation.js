function expand(){
    const xpand = document.getElementById('navigation');
    const removeMenus = document.getElementById('menus01');
    const expandBtn = document.getElementById('xpnd');
    const compressBtn = document.getElementById('compress');
    const menus02 = document.getElementById('menus02');

    xpand.classList.toggle('expandNav');
    xpand.style.transition = '.3s ease';
    removeMenus.classList.remove('menus01');
    removeMenus.classList.toggle('menus-none');
    expandBtn.classList.toggle('menus-none');
    compressBtn.classList.remove('menus-none');
    menus02.classList.toggle('menus02');
    menus02.classList.remove('menus-none');
}

function compress(){
    const xpand = document.getElementById('navigation');
    const removeMenus = document.getElementById('menus01');
    const expandBtn = document.getElementById('xpnd');
    const compressBtn = document.getElementById('compress');
    const menus02 = document.getElementById('menus02');

    xpand.classList.remove('expandNav');
    removeMenus.classList.toggle('menus01');
    removeMenus.classList.remove('menus-none');
    expandBtn.classList.remove('menus-none');
    compressBtn.classList.toggle('menus-none');
    menus02.classList.remove('menus02');
    menus02.classList.toggle('menus-none');
}

function homePage(){
    window.location.href = '../AdminPages/Home.html';
}
function productPage(){
    window.location.href = '../AdminPages/Products.html';
}
function pricePage(){
    window.location.href = '../AdminPages/Price.html';
}
function poPage(){
    window.location.href = '../AdminPages/PO.html';
}
function supplierPage(){
    window.location.href = '../AdminPages/Suppliers.html';
}
function staffaccPage(){
    window.location.href = '../AdminPages/StaffAcc.html';
}
function posPage(){
    window.location.href = '../AdminPages/POS.html';
}
function itPage(){
    window.location.href = '../AdminPages/IT.html';
}