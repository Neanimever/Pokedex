onload = () =>   {
    let btnMenuMobile = document.querySelector(".btn-menu-mobile");

    btnMenuMobile.addEventListener("click", () => {
        document.querySelector("ul").classList.toggle('open');
    })
}