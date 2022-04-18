const { getAll } = require("./api/item.js");

const table = document.getElementById("table-body");
const filterNames = ['first_name', 'last_name', 'email'];

const loadData = path => new Promise(resolve => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
});

const generateHtmlRow = (row) => {
    return `<tr><td>${row.id}</td>` +
    `<td>${row.first_name}</td>` +
    `<td>${row.last_name}</td>` +
    `<td>${row.email}</td>`
}

const renderTable = (data, terms) => {
    let resultingTable = data;
    if (terms) {
        terms.forEach(term => {
            if (term.value.length > 0) {
                resultingTable = resultingTable.filter(entry => entry[term.name].toLowerCase().includes(term.value));
            }
        });
    }
    const htmlString = resultingTable.reduce(((prev, next) => prev + generateHtmlRow(next)), "");
    table.innerHTML = htmlString;
}

loadData(`../data/data.json`).then((data) => renderTable(data));
const form = document.getElementById(`form`);
form.onSubmit = (event) => {
    event.preventDefault();

    const terms = filterNames.map(name => {
        return { name, value: event.target[name].value }
    });
  
    loadData(`../data/data.json`).then((data) => renderTable(data, terms));
};
form.onReset = () => {
    loadData(`../data/data.json`).then((data) => renderTable(data));
};