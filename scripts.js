function myFirstFunction() {
  document.querySelector('h1').style.color = '#f33';
  document.querySelector('h1').style.backgroundColor = '#000';
}

// myFirstFunction()

function anotherFunction() {
  console.log('your function is working yay : ) ');
}

// anotherFunction()

// this function updates the body background color
function applyStylingToBody() {
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#fff';
}

// document.querySelector('#btn').addEventListener('click', applyStylingToBody);

document.querySelector('#btn').addEventListener('click', function () {
  document.body.style.backgroundColor = '#ff0';
});

function anotherButtonClicked() {
  document.querySelector('h1').style.color = '#0f0';
}

function toggleBodyColor() {
  document.body.classList.toggle('toggle-background');
}

function enterData() {
  const value = document.querySelector('[data-input]').value;
  const p = document.createElement('p');
  p.textContent = value;
  document.body.appendChild(p);
}

// const value = 10;
// const value;

function addItem() {
  const value = document.querySelector('#form').value;
  const list = document.querySelector('#items');

  const li = document.createElement('li');
  li.innerHTML = value;

  list.appendChild(li);
  document.querySelector('#form').value = '';
}

function doTyping() {
  const value = document.querySelector('#input').value;
  const label = document.querySelector('#label')

  label.innerHTML = value
}

const fruits = ['apple', 'orange','kiwi', 'cherry']
// console.log(fruits)

fruits.forEach(function(fruit){
    const p = document.createElement('p')
    p.textContent = fruit;
    document.body.appendChild(p)
})

const urls = [
  'https://picsum.photos/id/1060/200',
  'https://picsum.photos/id/1050/200',
  'https://picsum.photos/id/1055/200',
  'https://picsum.photos/id/1062/200',
  'https://picsum.photos/id/1063/200',
  'https://picsum.photos/id/1066/200',
  'https://picsum.photos/id/1044/200',
  'https://picsum.photos/id/1032/200',
  'https://picsum.photos/id/103/200',
  'https://picsum.photos/id/10/200',
  'https://picsum.photos/id/1011/200',
]

urls.forEach(function(url){
    const img = document.createElement('img');
    img.src = url
    img.alt = 'sample image';
    img.classList.add('photo')
    const figure = document.querySelector('figure');
    figure.appendChild(img);
})
