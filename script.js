const companies = 'http://localhost:3000/companies';
const users = 'http://localhost:3000/users';

const getCompanies = async () => {                                              // asynchronous (not-blocking code) function which returns a promise.
    
    const responseCompanies = await fetch(companies);                           // "fetch" returns a promise, "await" stops assigning value to "response" variable, until the promise will be resolved.
    const dataCompanies = await responseCompanies.json();                       // "json" method returns a promise. This give us data as a JS object.
    // console.log(dataCompanies);

    const companyNameArray = [];

    // create array with company names
    for (i = 0; i < dataCompanies.length; i++) {
        if (dataCompanies[i].name) {
            companyNameArray.push(dataCompanies[i].name);
            // console.log(companyNameArray);
        };
    };

    // display list of company names in the browser
    for (i = 0; i < companyNameArray.length; i++) {
        const companyListItem = document.createElement('p');
        companyListItem.innerHTML = companyNameArray[i];
        document.getElementById('companies').appendChild(companyListItem);
    };
};

getCompanies();

const getUsers = async () => {
    const responseUsers = await fetch(users);
    const dataUsers = await responseUsers.json();

    const companyUsersArray = [];

    for (i = 0; i < dataUsers.length; i++) {
        if (dataUsers[i].email) {
            companyUsersArray.push(dataUsers[i].email);
        };
    };

    for (i = 0; i < companyUsersArray.length; i++) {
        const usersListItem = document.createElement('p');
        usersListItem.innerHTML = companyUsersArray[i];
        document.getElementById('users').appendChild(usersListItem);
    };
}

getUsers();