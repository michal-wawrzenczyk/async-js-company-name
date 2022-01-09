const companies = 'http://localhost:3000/companies';
const users = 'http://localhost:3000/users';
const table = document.getElementById('table')! as HTMLTableElement;

interface Company {
    name: string;
    uri: string;
}

interface User {
    name: string;
    uris: {company: string};
}

const getCompanies = async (): Promise<Company[]> => {                                              // asynchronous (not-blocking code) function which returns a promise.
    const responseCompanies = await fetch(companies);                           // "fetch" returns a promise, "await" stops assigning value to "response" variable, until the promise will be resolved.
    return await responseCompanies.json();                      // "json" method returns a promise. This give us data as a JS object.
    // console.log(dataCompanies);
    // return array with company objects
}

const getUsers = async (): Promise<User[]> => {
    const responseUsers = await fetch(users);
    return await responseUsers.json();
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

        let result = userData.filter(checkUri).map(userName).toString();

        function checkUri (userDataObject: User) {
            return userDataObject.uris.company === company.uri;
        }

        function userName (userObject: User) {
            return ` ${userObject.name}`; // template literals
        }

        userCell.innerText = result;
    });
}

getData();