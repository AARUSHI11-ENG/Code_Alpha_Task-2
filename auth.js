firebase.auth().onAuthStateChanged((user)=>{

    if(!user){

        window.location.href =
        "login.html";

    }

});
function logout(){

    firebase.auth()
    .signOut()
    .then(()=>{

        window.location.href =
        "login.html";

    });

}
firebase.auth().onAuthStateChanged((user)=>{

    if(!user){

        window.location.href =
        "login.html";

        return;
    }

    const userInfo =
    document.getElementById(
    "userInfo"
    );

    if(userInfo){

        userInfo.innerHTML =
        `👤 Welcome, ${user.email}`;

    }

});