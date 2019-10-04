import './style.css';

const input = document.getElementById('search');
const btn = document.getElementById('submit');
const client_Id = 'Iv1.4b3affc3c964f57394f2';
const client_Secret = 'b93c2f8918d25f413a4bab1e57b9446a46669c13';

const fetchData = async user => {
  const response = await fetch(`https://api.github.com/users/${user}?client_id=${client_Id}&
  client_secret=${client_Secret}`);
  const data = await response.json();
  console.log(data);
};

const displayData = () => {
  fetchData(input.value);
};

btn.addEventListener('click', displayData);
