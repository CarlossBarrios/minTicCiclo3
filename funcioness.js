// `   `
//GET
const urlClientesGET = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client'
const urlDoctoresGET = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor'
const urlMensajesGET = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message'





document.querySelector('#verClientes').addEventListener('click', traerDatosClientes);
document.querySelector('#verDoctores').addEventListener('click', traerDatosDoctores);
document.querySelector('#verMensajes').addEventListener('click', traerDatosMensajes);


function traerDatosClientes() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlClientesGET, true);

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












function traerDatosDoctores() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlDoctoresGET, true);

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


function traerDatosMensajes() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', urlMensajesGET, true);

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



//POST
const urlClientesPOST = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client'
const urlDoctoresPOST = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor'
const urlMensajesPOST = 'https://g51915f3bf5cc5a-barriosdb.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message'



document.querySelector('#registrarCliente').addEventListener('click', registroCliente);

function registroCliente() {

    let form = document.querySelector('#registerClient');

    form.innerHTML = `
            
            <form>
            <input id="inputClientName" placeholder="Type your name"><br>
            <input id="inputClientEmail" placeholder="Type your email adress"><br>
            <input id="inputClientAge" placeholder="Type your age"><br>

        </form>

        <a id="submitBtnPOSTclient" href="# ">Submit</a>

            `



}


document.querySelector('#registrarDoctor').addEventListener('click', registroDoctor);

function registroDoctor() {

    let form = document.querySelector('#registerDoctor');

    form.innerHTML = `
            
            <form>
            <input id="inputDoctorName" placeholder="Type your name"><br>
            <input id="inputDoctorSpecialty" placeholder="Type your Specialty"><br>
            <input id="inputDoctorGradYear" placeholder="Type your Graduate Year"><br>
            <input id="inputDoctorDeptID" placeholder="Type your Department id"><br>


        </form>

        <a id="submitBtnPOSTdoctor" href="# ">Submit</a>

            `



}








//PUT




//DELETE



//GET BY ID