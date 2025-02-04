document.addEventListener('DOMContentLoaded', function() {
    const navLinks = [
        { text: "Home", href: "/" },
        { text: "Games", href: "/gs.html" },
        { text: "Documentation", href: "/docs.html" },
        { text: "About Us", href: "/about.html" }
    ];

    const navLinksContainer = document.getElementById('nav-links');

    navLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.classList.add('nav-link');
        
        const h1 = document.createElement('h1');
        h1.textContent = link.text;
        
        anchor.appendChild(h1);
        navLinksContainer.appendChild(anchor);
    });
});
