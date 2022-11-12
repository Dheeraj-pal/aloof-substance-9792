document.querySelector("form").addEventListener("submit", signin);
let inArr = [];
function signin(event) {
  event.preventDefault();
  let inemail = document.querySelector("#email").value;
  let inpass = document.querySelector("#inpass").value;
  let inObj = {
    inemail,
    inpass,
  };
  inArr.push(inObj);
    localStorage.getItem("userdetails");
  let json = JSON.parse(localStorage.getItem("userdetails"));
  for (i = 0; i < json.length; i++) {
    if (json[i]["upemail"] == inemail) {
      if (json[i]["uppass"] == inpass) {
        window.location.href = "index.html";
        alert("login successful");
        break;
      } else {
        alert("wrong password");
        break;
      }
    } else {
      alert("wrong email");
      break;
    }
  }
}
