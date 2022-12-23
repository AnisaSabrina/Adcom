
alert("oke berhasil terhubung");
const getUsername = document.querySelector('#Username');
const getPassword = document.querySelector("#Password");
const getForm = document.querySelector("form"); 
const USERS =[
    {
    name: "anisa@gmail.com",
    password: "12345",
    },
];

USERS.forEach((user) => {
    console.log (user);
});

console.log(USERS);

getForm.addEventListener("submit", (Event) => {
    Event.preventDefault();
    alert(getUsername.value);
USERS.forEach((user) => {
    if(getUsername.value == user.name && getPassword.value ==user.password) {
        alert("Oke berhasil login");
    } else {
        alert("Invalid Credentials");
    }

 });
});

