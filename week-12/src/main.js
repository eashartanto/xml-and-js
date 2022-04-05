let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Select Car Model';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = './data/data.json';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement('option');
      option.text = data[i].car_make;
      option.value = data[i].car_make;
      dropdown.add(option);
    }
   } else {
    // Reached the server, but it returned an error
  }   
}

request.onerror = function() {
  console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }

  let source = data;

  if (nameTerm) {
    source = source.filter(({ first_name }) => first_name.toLowerCase().includes(nameTerm));
  }

  const rows = source.reduce(
    (acc, { id, first_name, last_name,email,gender,car_make,car_model,car_model_year,car_color,credit_card_number }) =>
      acc +
      `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${email}</td><td>${gender}</td><td>${car_make}</td><td>${car_model}</td><td>${car_model_year}</td><td>${car_color}</td><td>${credit_card_number}</td></tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};

loadData(`../data/data.json`).then((data) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term =  event.target.car_model_year.value;
  const terms =  event.target.car_make.value;

  loadData(`../data/data.json`).then((data) => renderTable(data, term));
  loadData(`../data/data.json`).then((data) => renderTable(data, terms));
};

const onReset = () => {
  loadData(`../data/data.json`).then((data) => renderTable(data));
};
