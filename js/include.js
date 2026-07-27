document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Load Navbar
    const navbar = await fetch("components/navbar.html");
    document.getElementById("navbar").innerHTML = await navbar.text();

    // Load Breadcrumb
    const breadcrumb = await fetch("components/breadcrumb.html");
    document.getElementById("breadcrumb-container").innerHTML =
      await breadcrumb.text();

    initSubmenu();

    setActiveNav();

    if (typeof createBreadcrumb === "function") {
      createBreadcrumb();
    }
  } catch (err) {
    console.error(err);
  }
});

function initSubmenu() {
  const links = document.querySelectorAll(".submenu-link");
  const sections = document.querySelectorAll(".submenu-section");

  if (!links.length || !sections.length) return;

  function showSection(id) {
    sections.forEach((section) => {
      section.classList.add("d-none");
    });

    links.forEach((link) => {
      link.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
      target.classList.remove("d-none");
    }

    const activeLink = document.querySelector(
      `.submenu-link[data-target="${id}"]`,
    );

    if (activeLink) {
      activeLink.classList.add("active");
    }

    if (typeof createBreadcrumb === "function") {
      createBreadcrumb();
    }
  }

  let current = window.location.hash.replace("#", "");

  if (!current) {
    current = document.querySelector(".submenu-section")?.id;
  }

  if (current) {
    showSection(current);
  }

  showSection(current);

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // If link points to another page, let browser navigate
      const href = this.getAttribute("href");

      if (href && !href.startsWith("#")) {
        return;
      }

      e.preventDefault();

      const section = this.dataset.target;

      history.replaceState(null, "", "#" + section);

      showSection(section);
    });
  });

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      showSection(hash);
    }
  });
}

function setActiveNav() {
  const page = document.body.dataset.page;

  const navLinks = document.querySelectorAll(".nav-item > a");

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.dataset.page === page) {
      link.classList.add("active");
    }
  });
}
