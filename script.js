$(document).ready(function ()
{
    $(window).scroll(function ()
    {
        if (this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        } else
        {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");
        } else
        {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide  script

    $('.scroll-up-btn').click(function ()
    {
        $('html').animate({scrollTop: 0});
    });

// toggle script
    $('.menu-btn').click(function ()
    {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

//typing anumantion

var types = new Typed(".typing", {
    strings: ["Software Developer...", "Web Developer..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});

var types = new Typed(".typing2", {
    strings: ["Software Developer...", "Web Developer..."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});