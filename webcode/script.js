var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("placeholder","ENTER THE ID(FROM 1-50) OR NAME OF THE POKEMON");
input.setAttribute("type","text");
input.setAttribute("id","pokemon");

var button=document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("value","search");
button.innerHTML="search";
button.addEventListener("click",foo);

var ability=document.createElement("div");
ability.setAttribute("id","ability");

var weight=document.createElement("div");
weight.setAttribute("id","weight");

var moves=document.createElement("div");
moves.setAttribute("id","moves");

div.append(input,button,ability,weight,moves);
document.body.append(div);

async function foo(){
    var res= document.getElementById("pokemon").value;
    var url=`https://pokeapi.co/api/v2/pokemon/${res}`;

    var result=await fetch(url);
    var result1=await result.json();

    ability.innerHTML= `Ability of pokemon: ${result1.abilities[0].ability.name}`;
    weight.innerHTML=`Weight of pokemon: ${result1.weight}`;
    moves.innerHTML=`Moves of pokemon:${result1.moves[0].move.name}`;
}
