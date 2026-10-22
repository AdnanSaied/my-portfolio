document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("mainNav");
    const navLinks = document.querySelectorAll("#navbarMenu .nav-link");
    const navbarMenu = document.getElementById("navbarMenu");

    // Change the navbar when scrolling
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-shrink");
        } else {
            navbar.classList.remove("navbar-shrink");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    // Close the mobile menu after selecting a section
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbarMenu.classList.contains("show")) {
                const menu = bootstrap.Collapse.getOrCreateInstance(navbarMenu);
                menu.hide();
            }
        });
    });

    // Highlight the navigation link for the current section
    const sections = document.querySelectorAll("header[id], section[id]");

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 130;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    // Automatically update the copyright year
    document.getElementById("currentYear").textContent =
        new Date().getFullYear();
});