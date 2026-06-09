function signup(){

    const email =
    document.getElementById(
    "email"
    ).value;

    const password =
    document.getElementById(
    "password"
    ).value;

    firebase.auth()
    .createUserWithEmailAndPassword(
        email,
        password
    )
    .then(()=>{

        window.location.href =
        "index.html";

    })
    .catch((error)=>{

        alert(error.message);

    });

}

function login(){

    const email =
    document.getElementById(
    "email"
    ).value;

    const password =
    document.getElementById(
    "password"
    ).value;

    firebase.auth()
    .signInWithEmailAndPassword(
        email,
        password
    )
    .then(()=>{

        window.location.href =
        "index.html";

    })
    .catch((error)=>{

        alert(error.message);

    });

}

function googleLogin(){

    const provider =
    new firebase.auth.GoogleAuthProvider();

    firebase.auth()
    .signInWithPopup(
        provider
    )
    .then(()=>{

        window.location.href =
        "index.html";

    });

}