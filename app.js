let section = document.getElementById('pays');

function afficherPays() {
	let request = new XMLHttpRequest();
	request.open('GET', 'https://restcountries.eu/rest/v2/all');
	request.onreadystatechange = function() {
		if (this.readyState === 4 && this.status === 200) {
			JSON.parse(this.responseText);

			let pays = JSON.parse(this.responseText);
			pays.forEach((element) => {
				let list = document.createElement('p');
				list.className = 'btn btn-outline-secondary';
				list.appendChild(document.createTextNode(element.name));
				section.appendChild(list);
				console.log(element.name);
			});
		}
	};
	request.send();
}

afficherPays();
