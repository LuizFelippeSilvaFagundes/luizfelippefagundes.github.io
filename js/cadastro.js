var dialog = document.querySelector('.dialogNewsletter');
var abreDialog = document.querySelector('.abreDialog');

abreDialog.addEventListener('click', function() {
  dialog.classList.toggle('dialogNewsletter--aberto');
  dialog.querySelector('input').focus();
});