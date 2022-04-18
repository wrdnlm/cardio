const BODY = document.body;
const divHook = document.createElement('div');

divHook.classList = 'wrapper';
BODY.appendChild(divHook);

const unorderedList = document.createElement('ul');
const arrText = ['one', 'two', 'three'];

for (let i = 0; i < 3; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = arrText[i];
  unorderedList.appendChild(listItem);
}
divHook.appendChild(unorderedList);

const imageEl = document.createElement('img');
imageEl.src = './pup.jpeg';
imageEl.width = 250;
imageEl.classList = 'cute';
imageEl.alt = 'Cute Puppy';
divHook.appendChild(imageEl);

const divWarning = `
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit impedit quas commodi natus quisquam autem perferendis. Cupiditate, inventore voluptatum nemo quam, odit, nobis nihil explicabo dolor recusandae labore natus!</p>
    <p class="warning">this is a warning</p>
  </div>
`;
divHook.insertAdjacentHTML('afterbegin', divWarning);
document.querySelector('p').remove();

function generatePlayerCard(name, age, height) {
  console.log(name, age, height)
  let ageInDogYears = age * 7;
  let template =  `
    <div class="playerCard js-player-card">
      <h2>${name} - ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
      <button class="js-remove-card">Delete</button>
    </div>
  `;
  divHook.insertAdjacentHTML('beforebegin', template);
}

const cardsHook = document.createElement('div').classList.add('cards');
const arrPlayers = [
  {
    name: 'Aaron',
    age: 21,
    height: '5ft'
  },
  {
    name: 'Drake',
    age: 18,
    height: '5ft'
  },
  {
    name: 'Major Campbell',
    age: 23,
    height: '5ft'
  },
  {
    name: 'Malcolm',
    age: 25,
    height: '6ft'
  }
];

arrPlayers.forEach(player => {
  let { name, age, height } = player;
  generatePlayerCard(name, age, height);
});

const arrBtnDelete = document.querySelectorAll('.js-remove-card');

function deleteCard(e) {
  let el = e.target;
  const card = el.closest('.js-player-card');
  card.remove();
}

arrBtnDelete.forEach(btn => {
  btn.addEventListener('click', deleteCard);
});