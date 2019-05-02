let name = prompt('Your name?');

function checkName(nameStr) {
    if(nameStr === '') {
        nameStr = prompt('No really...');
        nameStr = checkName(nameStr);
    }
    return nameStr;
}

name = checkName(name);

document.querySelector('h1').innerHTML = `Hello ${name}, I am Zhana Liner`;