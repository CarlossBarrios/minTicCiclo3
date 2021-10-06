const aplicacion = document.querySelector('.container')
const HTMLResponse = document.querySelector("#app");


const url = 'https://jsonplaceholder.typicode.com/users'
const url2 = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor'
const url3 = 'https://g6c335b483ca254-gastosbd1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/gastos/gastos'





fetch(url)
.then(res => res.json())
.then(data => {
    data.forEach(items => {
        console.log(items.name)
        const p = document.createElement('p')
        p.innerHTML = items.name
        aplicacion.appendChild(p)
    });
    console.log(data)
})
.catch(err => console.log(err))

/*

fetch(url)
.then((response) => response.json())
.then((doctores) => {

    const tpl = doctores.map(doctor => '<li>${doctor.name}</li>');
    HTMLResponse.innerHTML = doctores;

});


*/










/*
const API_URL = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();

function onRequestHandler() {

    if(this.readyState === 4 && this.status === 200){

        console.log(this.response);

    }

}


xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', '${API_URL}/users');
xhr.send();

*/