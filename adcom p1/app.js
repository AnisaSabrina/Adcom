// cek apakah sudah terkoneksi
//alert("oke berhasil terhubung");


//ambil elemen input use
const getUsername = document.querySelector('#Username');
const getPassword = document.querySelector("#Password");
const getForm = document.querySelector("form"); 

// buat data user dan password
const USERS =[
    {
    name: "anisa@gmail.com",
    password: "12345",
    },
];

// lakukan perulangan untuk ambil data dari database
USERS.forEach((user) => {
    console.log (user);
});

// testing console.log('user)
console.log(USERS);

// tambahkan event ketika user klik login form
getForm.addEventListener("submit", (Event) => {
    // agar ketika user klik login tidak terload browsernya
    Event.preventDefault();

    // ambil value dari input username
    alert(getUsername.value);

// lakukan percabangan dan perulangan 
USERS.forEach((user) => {
    // percabangan
    if(getUsername.value == user.name && getPassword.value ==user.password) {
        alert("Oke berhasil login");
    } else {
        alert("Invalid Credentials");
    }

});
});
