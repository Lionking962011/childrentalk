function adduser()
{
    user_name = document.getElementById("username").value;
    img_name = document.getElementById("profilimg").value;
    localStorage.setItem("user Name",user_name);
    localStorage.setItem("Image Name",img_name);
    window.location = "roomselectionpage.html";
}