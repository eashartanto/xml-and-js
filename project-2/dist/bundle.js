(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

const onSubmit = (event) => {
    event.preventDefault();

    const terms = filterNames.map(name => {
        return { name, value: event.target[name].value }
    });
  
    loadData(`../data/data.json`).then((data) => renderTable(data, terms));
};

const onReset = () => {
    loadData(`../data/data.json`).then((data) => renderTable(data));
};
},{}]},{},[1]);
