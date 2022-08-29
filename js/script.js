function dropDownMenu() {
    let ddMenu = document.getElementById("dd-menu-box");
    let btnStatus = document.getElementById("menu-btn")
    // console.log(ddMenu.style.top);
    if (ddMenu.style.top === "0px") {
        ddMenu.style.top = null;
        btnStatus.classList.remove("menu-btn_close");
    } else {
        ddMenu.style.top = "0px";
        btnStatus.classList.add("menu-btn_close");
    }
}