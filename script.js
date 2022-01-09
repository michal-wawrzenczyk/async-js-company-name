"use strict";
const companies = 'http://localhost:3000/companies';
const users = 'http://localhost:3000/users';
const table = document.getElementById('table');
const getCompanies = async () => {
    const responseCompanies = await fetch(companies);
    return await responseCompanies.json();
};
const getUsers = async () => {
    const responseUsers = await fetch(users);
    return await responseUsers.json();
};
const getData = async () => {
    const companyData = await getCompanies();
    const userData = await getUsers();
    companyData.forEach(company => {
        const row = document.createElement('tr');
        const companyCell = document.createElement('td');
        const userCell = document.createElement('td');
        companyCell.innerHTML = company.name;
        table.appendChild(row);
        row.appendChild(companyCell);
        row.appendChild(userCell);
        let result = userData.filter(checkUri).map(userName).toString();
        function checkUri(userDataObject) {
            return userDataObject.uris.company === company.uri;
        }
        function userName(userObject) {
            return ` ${userObject.name}`;
        }
        userCell.innerText = result;
    });
};
getData();
