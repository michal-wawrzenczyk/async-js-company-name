const companies = 'http://localhost:3000/companies';
const users = 'http://localhost:3000/users';
const table = document.getElementById('table');

const getCompanies = async () => {                                              // asynchronous (not-blocking code) function which returns a promise.
    const responseCompanies = await fetch(companies);                           // "fetch" returns a promise, "await" stops assigning value to "response" variable, until the promise will be resolved.
    const dataCompanies = await responseCompanies.json();                       // "json" method returns a promise. This give us data as a JS object.
    // console.log(dataCompanies);
    // return array witch company objects
    return dataCompanies;
};

const getUsers = async () => {
    const responseUsers = await fetch(users);
    const dataUsers = await responseUsers.json();
    return dataUsers;
}

const getData = async () => {
    const companyData = await getCompanies();
    const userData = await getUsers();

    companyData.forEach(company => {
        const row = document.createElement('tr');
        const companyCell = document.createElement('td')
        const userCell = document.createElement('td');
        companyCell.innerHTML = company.name;

        table.appendChild(row);
        row.appendChild(companyCell);
        row.appendChild(userCell);

        let result = userData.filter(checkUri).map(userName);

        function checkUri (userDataObject) {
            return userDataObject.uris.company === company.uri;
        };

        function userName (userObject) {
            return userObject.name;
        };

        userCell.innerText = result;
    });
};

getData();