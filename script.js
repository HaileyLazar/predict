document.getElementById('predictBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();

    if (name === '') {
        alert('Please enter a name');
        return;
    }

    // Clear previous results
    document.getElementById('genderResult').textContent = 'Gender: --';
    document.getElementById('ageResult').textContent = 'Age: --';
    document.getElementById('nationalityResult').textContent = 'Nationality: --';

    // Fetch Gender Data
    fetch(`https://api.genderize.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
            if (data.gender) {
                document.getElementById('genderResult').textContent = `Gender: ${data.gender}`;
            } else {
                document.getElementById('genderResult').textContent = 'Gender: Data not found';
            }
        })
        .catch(error => {
            console.error('Error fetching gender data:', error);
            document.getElementById('genderResult').textContent = 'Gender: Error fetching data';
        });

    // Fetch Age Data
    fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
            if (data.age) {
                document.getElementById('ageResult').textContent = `Age: ${data.age}`;
            } else {
                document.getElementById('ageResult').textContent = 'Age: Data not found';
            }
        })
        .catch(error => {
            console.error('Error fetching age data:', error);
            document.getElementById('ageResult').textContent = 'Age: Error fetching data';
        });

    // Fetch Nationality Data
    fetch(`https://api.nationalize.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
            if (data.country) {
                document.getElementById('nationalityResult').textContent = `Nationality: ${data.country[0].country_id}`;
            } else {
                document.getElementById('nationalityResult').textContent = 'Nationality: Data not found';
            }
        })
        .catch(error => {
            console.error('Error fetching nationality data:', error);
            document.getElementById('nationalityResult').textContent = 'Nationality: Error fetching data';
        });
});
