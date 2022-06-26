fetch('/data/hotSearch.json').then(response => response.json())
.then(data => console.log(data));