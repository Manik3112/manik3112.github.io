function welcome() {
    var unname = document.getElementById("username");
    var pname = document.getElementById("pass");

    if (pname.value.trim() == "" || unname.value.trim() == "") {
        alert("Donot left blank both the things");
        return false;
    } else {
        if (pname.value.trim() == "Koshish" && unname.value.trim().toLowerCase() == "user") {
            alert("Welcome User");
            window.location.href = './user/home page/homepage.html'
            return true;
        } else if (pname.value.trim() == "Koshish" && unname.value.trim().toLowerCase() == "admin") {
            alert("Welcome Admin")
            document.location.href = "./admin/Admin_page/Admin_page.html";
            return true;
        }
        else{
            alert("Wrong Credentials")  
        }
        return true;

    }


}