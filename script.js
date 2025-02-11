document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section'); // Ambil semua section yang dihubungkan dengan menu
  const navLinks = document.querySelectorAll('.nav-link'); // Ambil semua elemen navbar dengan kelas 'nav-link'

  // Fungsi untuk menghapus semua kelas 'active' dari navbar
  function removeActiveClasses() {
    navLinks.forEach(link => link.classList.remove('active'));
  }

  // Fungsi untuk menambahkan kelas 'active' ke link yang sesuai
  function addActiveClass(link) {
    link.classList.add('active');
  }

  // Fungsi untuk menandai link aktif berdasarkan scroll posisi
  function onScroll() {
    let currentSection = '';
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    // Set active class berdasarkan id section yang sedang dalam view
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  }

  // Event listener untuk klik
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      removeActiveClasses();
      addActiveClass(this);
    });
  });

  // Event listener untuk scroll
  window.addEventListener('scroll', onScroll);
});