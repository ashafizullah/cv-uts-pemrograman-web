/* =====================================================================
   script.js  -  CV Adam Suchi Hafizullah
   UTS Pemrograman Web I (IF210) - Universitas Siber Asia
   Catatan: JavaScript sederhana untuk meningkatkan interaktivitas.
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* 1) Menutup menu navbar otomatis di layar kecil setelah link diklik */
  const navLinks = document.querySelectorAll("#navMenu .nav-link");
  const navCollapse = document.getElementById("navMenu");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapse.classList.contains("show")) {
        // gunakan API Collapse milik Bootstrap bila tersedia
        if (window.bootstrap && bootstrap.Collapse) {
          bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
      }
    });
  });

  /* 2) Efek bayangan navbar saat halaman di-scroll */
  const navbar = document.getElementById("mainNav");
  function toggleNavShadow() {
    if (window.scrollY > 20) {
      navbar.classList.add("shadow-sm");
    } else {
      navbar.classList.remove("shadow-sm");
    }
  }
  window.addEventListener("scroll", toggleNavShadow);
  toggleNavShadow();

  /* 3) Sapaan kecil di console (tidak mengganggu tampilan) */
  console.log(
    "%cCV Adam Suchi Hafizullah",
    "color:#0f766e;font-weight:bold;font-size:14px;"
  );
  console.log("UTS Pemrograman Web I (IF210) - NIM 250401010513");
});
