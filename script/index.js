//PI = La3R! TGEzUiE
const beskjed = document.getElementById("beskjed");
const inp1 = document.getElementById("inp1");
const login = document.getElementById("login");

login.onclick = () => {
  let access = checkInput();
  console.log(access);
  if (access) {
    let code = Date.now();
    sessionStorage.setItem("token", code);
    window.location.href = `hjem.html?${code}`;
  }
};



function checkInput() {
  console.log(btoa(inp1.value));
  if (inp1.value === "") {
    beskjed.innerText = "Ingen tilgang uten passord!";
    beskjed.classList.remove("skjult");
    beskjed.classList.remove("ugyldig");
    return false;
  } else if (inp1.value === atob("VGVzdDE")) {
    beskjed.innerText = "";
    beskjed.classList.remove("skjult");
    beskjed.classList.remove("ugyldig");
    return true;
  } else {
    beskjed.innerText = "Ugyldig passord!";
    beskjed.classList.remove("skjult");
    beskjed.classList.add("ugyldig");
    return false;
  }
}
