 // side nav
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
    // slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
    });
    // Autocomplete
    const ac = document.querySelector(".autocomplete");
    M.Autocomplete.init(ac, {
        data: {
            "Accounting Secretary": null,
            "Application Development": null,
            "Bilingual Secretary": null,
            "Business Palnning & Management": null,
            "Computer maintenace and Networking": null,
            "Computerise Accounting and Management": null,
            "Database Administration and Management":null,
            "Digital Marketing": null,
            "Graphic Designing": null,
            "Human Resource Management": null,
            "Office Automation Secretaryship": null,
            "Project Planning & Management": null,
            "Web Master & Video Editing": null,
        }
    });
    // material Boxed 
     const mb = document.querySelectorAll('.materialboxed');
     M.Materialbox.init(mb, {});

    // //scrollsky
     const ss = document.querySelectorAll('.scrollspy');
     M.ScrollSpy.init(ss, {});