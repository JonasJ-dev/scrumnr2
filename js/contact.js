var form = document.getElementById('f');

function submitSent() {
  if (form.checkValidity()) {
    alert("Išsiųsta!");
  }
}