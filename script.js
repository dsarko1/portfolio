function copiarEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email);

  const msg = document.getElementById("copy-msg");
  msg.innerText = "Email copiado al portapapeles ✔";

  setTimeout(() => {
    msg.innerText = "";
  }, 2000);
}
