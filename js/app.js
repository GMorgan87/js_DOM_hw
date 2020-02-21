document.addEventListener('DOMContentLoaded', () => {
  const inputForm = find('#input-form');
  inputForm.addEventListener('submit', handleInputForm);

  const button = find('#button');
  button.addEventListener('click', handleButtonClick);
});

const handleInputForm = function (event) {
  event.preventDefault();
  const bikeList = find('#bike-list');
  const newBike = document.createElement('li');

  const newMake = document.createElement('h2');
  newMake.textContent = `${event.target.make.value}`;
  newBike.appendChild(newMake);

  const newModel = document.createElement('h3');
  newModel.textContent = `${event.target.model.value}`;
  newBike.appendChild(newModel);

  const newCategory = document.createElement('p');
  newCategory.textContent = `${event.target.category.value}`;
  newBike.appendChild(newCategory);


  bikeList.appendChild(newBike);
};

const handleButtonClick = function () {
  const bikeList = find('#bike-list')
};


const find = function (string) {
  return document.querySelector(`${string}`);
}
