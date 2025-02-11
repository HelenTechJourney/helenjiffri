// Fungsi untuk kembali ke menu tertentu di halaman utama
function backToMainMenu(sectionId) {
 // Arahkan kembali ke halaman utama
  window.location.href = `index.html#${sectionId}`;
  }
  
  // Ketika halaman portfolio dimuat, ini mengecek jika ada navigasi yang diarahkan ke bagian tertentu
  document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Event listener untuk klik
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah reload halaman
        const targetSection = this.getAttribute('href').split('#')[1]; // Ambil ID section
        backToMainMenu(targetSection); // Panggil fungsi navigasi
      });
    });
  });