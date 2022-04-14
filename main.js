//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value;
  const url = `https://pokeapi.co/api/v2/pokemon/${choice}`;

  console.log(choice);
  console.log(url);

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.querySelector('img').src = data.sprites.other["official-artwork"].front_default;
      })

      .catch(err => {
        console.log(`error ${err}`);
      })

  fetch(`https://pokeapi.co/api/v2/pokemon-species/${choice}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.querySelector('p').innerText = data.flavor_text_entries[0].flavor_text;
      })
}