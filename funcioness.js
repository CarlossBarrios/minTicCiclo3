// `   `

const urlClientes = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client'
const urlDoctores = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor'
const urlMensajes = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message'



document.querySelector('#clientes').addEventListener('click', traerDatosClientes);
document.querySelector('#doctores').addEventListener('click', traerDatosDoctores);
document.querySelector('#mensajes').addEventListener('click', traerDatosMensajes);


function traerDatosMensajes() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlMensajes, true);

    xhr.send();

    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {


            let datos = JSON.parse(this.responseText);

            let title = document.querySelector('#title');

            title.innerHTML = `
            
            <h2>Mensajes</h2>

            `

            let thead = document.querySelector('#thead');

            thead.innerHTML = `
            <tr>
            <th>id</th>
            <th>Message Text</th>
            </tr>

            `


            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (i = 0; i < datos.items.length; i++) {

                res.innerHTML += `   

                <tr>
                    <td>${datos.items[i].id}</td>
                    <td>${datos.items[i].messagetext} </td>
                </tr>


                `

            }

        }

    }

}





function traerDatosDoctores() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlDoctores, true);

    xhr.send();

    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);

            let title = document.querySelector('#title');

            title.innerHTML = `
            
            <h2>Doctores</h2>

            `
            let thead = document.querySelector('#thead');

            thead.innerHTML = `
            <tr>
            <th>id</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Graduate Year</th>
            <th>Department id</th>
            </tr>

            `

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (i = 0; i < datos.items.length; i++) {

                res.innerHTML += `   

                <tr>
                    <td>${datos.items[i].id}</td>
                    <td>${datos.items[i].name} </td>
                    <td>${datos.items[i].specialty}</td>
                    <td>${datos.items[i].graduate_year}</td>
                    <td>${datos.items[i].department_id}</td>




                </tr>


                `

            }

        }

    }

}


function traerDatosClientes() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlClientes, true);

    xhr.send();

    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            let datos = JSON.parse(this.responseText);

            let title = document.querySelector('#title');

            title.innerHTML = `
            
            <h2>Clientes</h2>

            `

            let thead = document.querySelector('#thead');

            thead.innerHTML = `
            <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>age</th>
            </tr>

            `

            let res = document.querySelector('#res');
            res.innerHTML = '';

            for (i = 0; i < datos.items.length; i++) {

                res.innerHTML += `   

                <tr>
                    <td>${datos.items[i].id}</td>
                    <td>${datos.items[i].name} </td>
                    <td>${datos.items[i].email}</td>
                    <td>${datos.items[i].age}


                </tr>


                `

            }

        }

    }

}