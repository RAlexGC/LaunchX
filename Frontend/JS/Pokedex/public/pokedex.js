const fetchPokemon = () => {
    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput.toLowerCase()}`;
    const pokeNo = document.getElementById('pokeNum');
    const pokeNameO = document.getElementById('pokeNameOut');
    const pokeType = document.getElementById('Type');
    const pokeHP = document.getElementById('HP');
    const pokeATK = document.getElementById('ATK');
    const pokeDEF = document.getElementById('DEF');
    const pokeSPA = document.getElementById('SPA');
    const pokeSPD = document.getElementById('SPD');
    const pokeSpeed = document.getElementById('Speed');
    const pokeMov1 = document.getElementById('mov1');
    const pokeMov2 = document.getElementById('mov2');
    const pokeMov3 = document.getElementById('mov3');
    const pokeMov4 = document.getElementById('mov4');

    fetch(url).then((res) => {
        if(res.status != '200'){
            pokeImage('./img/pikachu404.png');
            pokeNo.innerHTML = '# N/D'
            pokeNameO.innerHTML = 'Nombre: N/D'
            pokeType.innerHTML = 'N/D'
            pokeHP.innerHTML = 'N/D'
            pokeATK.innerHTML = 'N/D'
            pokeDEF.innerHTML = 'N/D'
            pokeSPA.innerHTML = 'N/D'
            pokeSPD.innerHTML = 'N/D'
            pokeSpeed.innerHTML = 'N/D'
            pokeMov1.innerHTML = 'N/D'
            pokeMov2.innerHTML = 'N/D'
            pokeMov3.innerHTML = 'N/D'
            pokeMov4.innerHTML = 'N/D'

        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.other.dream_world.front_default;
        pokeImage(pokeImg);
        let pokeNum = data.order;
        pokeNo.innerHTML = '# ' + pokeNum;
        let pokeN = data.name;
        pokeNameO.innerHTML = 'Nombre: ' + pokeN[0].toUpperCase() + pokeN.slice(1);
        if (Object.keys(data.types).length === 1) {
            let pType1 = data.types[0].type.name;
            pokeType.innerHTML = pType1[0].toUpperCase()+pType1.slice(1)
        } else {
            let pType1 = data.types[0].type.name;
            let pType2 = data.types[1].type.name;
            pokeType.innerHTML = pType1[0].toUpperCase()+pType1.slice(1) + ' / ' + pType2[0].toUpperCase()+pType2.slice(1)
        }
        let pHP = data.stats[0].base_stat;
        pokeHP.innerHTML = pHP;
        let pATK = data.stats[1].base_stat;
        pokeATK.innerHTML = pATK;
        let pDEF = data.stats[2].base_stat;
        pokeDEF.innerHTML = pDEF;
        let pSPA = data.stats[3].base_stat;
        pokeSPA.innerHTML = pSPA;
        let pSPD = data.stats[4].base_stat;
        pokeSPD.innerHTML = pSPD;
        let pSpeed = data.stats[5].base_stat;
        pokeSpeed.innerHTML = pSpeed;
        let pMov1 = data.moves[0].move.name;
        pokeMov1.innerHTML = pMov1[0].toUpperCase()+pMov1.slice(1);
        let pMov2 = data.moves[1].move.name;
        pokeMov2.innerHTML = pMov2[0].toUpperCase()+pMov2.slice(1);
        let pMov3 = data.moves[2].move.name;
        pokeMov3.innerHTML = pMov3[0].toUpperCase()+pMov3.slice(1);
        let pMov4 = data.moves[3].move.name;
        pokeMov4.innerHTML = pMov4[0].toUpperCase()+pMov4.slice(1);
       

    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById('pokeImg');
    pokeImg.src = url;
}
