const loadData = () =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open(
      "GET",
      `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
      true
    );
    xhttp.send();
  });

loadData().then((data) => {
  // render data in html table
  const tableBody = document.getElementById("table-body");

	if (!tableBody) {
		throw new Error("No table element found");
	}
  
	const rows = data.reduce(
		(acc, { id, userName, email, isSuspended, createdAt}) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${userName}</td><td>${email}</td><td>${isSuspended}</td><td>${createdAt}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
});
