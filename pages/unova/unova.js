let currentPageURL = "https://pokeapi.co/api/v2/pokemon-form?offset=495&limit=9";

onload = async () => {
    try {
        await loadPoke(currentPageURL);
    } catch(error) {
        console.log(error);
        alert("Erro ao exibir o container");
    }

    let btnMenuMobile = document.querySelector(".btn-menu-mobile");

    btnMenuMobile.addEventListener("click", () => {
        document.querySelector("ul").classList.toggle('open');
    })
}

async function loadPoke(url) {
    const container = document.querySelector(".container");
    container.innerHTML = '';

    let sum = 495;

    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.some((poke) => {
            const content = document.createElement("div");
            content.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${sum}.png')`;
            content.className = "content";

            const pokeNameBG = document.createElement("div");
            pokeNameBG.className = "poke-name-bg";

            const name = document.createElement("span");
            name.className = "name";
            name.innerText = `${poke.name}`;

            pokeNameBG.appendChild(name);
            content.appendChild(pokeNameBG);
            container.appendChild(content);
            
            sum++;
            if(sum > 503) return true
        })

        currentPageURL = url;
    } catch(error) {
        console.log(error);
        alert("Erro ao exibir os pokémon");
    }
}