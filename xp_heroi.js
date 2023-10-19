let nome_heroi = "Wesley";
let xp_heroi = 5000;
let nivel_heroi = "";

switch(xp_heroi) {
    case xp_heroi <= 1000:
        nivel_heroi = "Ferro";
        break;

    case xp_heroi > 1000 && xp_heroi <= 2000:
        nivel_heroi = "Bronze";
        break;

    case xp_heroi > 2000 && xp_heroi <= 5000:
        nivel_heroi = "Prata";
        break;

    case xp_heroi > 5000 && xp_heroi <= 7000:
        nivel_heroi = "Ouro";
        break;

    case xp_heroi > 7000 && xp_heroi <= 8000:
        nivel_heroi = "Platina";
        break;

    case xp_heroi > 8000 && xp_heroi <= 9000:
        nivel_heroi = "Ascendente";
        break;

    case xp_heroi > 9000 && xp_heroi <= 10000:
        nivel_heroi = "Imortal";
        break;

    default:
        nivel_heroi = "Radiante";
        break;
    }

console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);



