document.addEventListener('DOMContentLoaded', () => {
  const inputForm = find('#input-form');
  inputForm.addEventListener('submit', handleInputForm);

  const button = find('#button');
  button.addEventListener('click', handleButtonClick);
});

const handleInputForm = function (event) {
  event.preventDefault();
  const bikeList = find('#bike-list');
  const newBike = createBikeItem(event.target)
  bikeList.appendChild(newBike);
  this.reset();
};

const addListItem = function (id, tag, list) {
  const newItem = document.createElement(tag);
  newItem.textContent = find(`#${id}`).value;
  list.appendChild(newItem);
};

const createBikeItem = function (form) {
  const bike = document.createElement('li');
  addListItem('make', 'h1', bike);
  addListItem('model', 'h2', bike);
  addListItem('category', 'h2', bike);
  return bike;
};

const handleButtonClick = function () {
  const bikeList = find('#bike-list')
  bikeList.innerHTML = '';
};


const find = function (string) {
  return document.querySelector(string);
}
