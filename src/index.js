let name = prompt('Your name?');

function checkName(nameStr) {
    if(!nameStr) {
        nameStr = prompt('No really...');
        nameStr = checkName(nameStr);
    }
    return nameStr;
}

name = checkName(name);

let lastName = prompt('Your last name?');

function checkLastName(nameStr) {
    if(!nameStr) {
        nameStr = prompt('No really...');
        nameStr = checkName(nameStr);
    }
    return nameStr;
}

lastName = checkLastName(lastName);

document.querySelector('h1').textContent = `Hello ${name} ${lastName}, I am Zhana Liner`;