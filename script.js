document.getElementById("predictBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();

  if (!name) {
    alert('Please enter a name');
    return;
  }

  const genderApiUrl = `https://api.genderize.io?name=${name}`; // Gender API URL
  const ageApiUrl = `https://api.agify.io?name=${name}`; // Age API URL
  const nationalityApiUrl = `https://nationalize.io?name=${name}`; // Nationality API URL

  // Clear previous results
  document.getElementById('genderResult').textContent = 'Gender: --';
  document.getElementById('ageResult').textContent = 'Age: --';
  document.getElementById('nationalityResult').textContent = 'Nationality: --';

  // Fetch Gender Data
  fetch(genderApiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      if (data.gender) {
        document.getElementById('genderResult').textContent = `Gender: ${data.gender}`;
      } else {
        document.getElementById('genderResult').textContent = 'Gender: Data not found';
      }
    })
    .catch((error) => {
        console.error(error);
      document.getElementById('genderResult').textContent = 'Gender: Error fetching data';
    });

  // Fetch Age Data
  fetch(ageApiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.age) {
            document.getElementById('ageResult').textContent = `Age: ${data.age}`;
        } else {
            document.getElementById('ageResult').textContent = 'Age: Data not found';
      }
    })
    .catch((error) => {
        console.error(error);
      document.getElementById('ageResult').textContent = 'Age: Error fetching data';
    });

  // Fetch Nationality Data
  fetch(nationalityApiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.country && data.country.length > 0) {
            document.getElementById('nationalityResult').textContent = `Nationality: ${data.country[0].country_id}`;
      } else {
        document.getElementById('nationalityResult').textContent = 'Nationality: Data not found';
      }
    })
    .catch((error) => {
        console.error(error);
        document.getElementById('nationalityResult').textContent = 'Nationality: Error fetching data';
    });
});
