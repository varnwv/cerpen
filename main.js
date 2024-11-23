document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    alert("Maaf, situs ini hanya dapat diakses melalui perangkat mobile.");
    document.body.innerHTML = ""; // Menghapus konten halaman untuk desktop
  }
});

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

let unlockInspect = false;

// Mencegah klik kanan dan shortcut developer tools
document.addEventListener("contextmenu", function (e) {
  if (!unlockInspect) e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  // Blokir F12 dan shortcut Developer Tools jika unlockInspect masih false
  if (!unlockInspect) {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I atau Ctrl+Shift+J
      (e.ctrlKey && e.keyCode === 85) // Ctrl+U
    ) {
      e.preventDefault();
    }
  }

  // Kombinasi "kode rahasia" Ctrl + Alt + Shift + Q untuk membuka akses Inspect
  if (e.ctrlKey && e.altKey && e.shiftKey && e.keyCode === 81) {
    // Ctrl + Alt + Shift + Q
    unlockInspect = !unlockInspect;
    if (unlockInspect) {
      alert("Developer tools unlocked. You can now use Inspect Element.");
    } else {
      alert("Developer tools locked. Inspect Element access disabled.");
    }
  }
});