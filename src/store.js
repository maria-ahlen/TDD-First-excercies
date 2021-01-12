let savedValue;

function store(value) {
    if (value !== undefined) 
    savedValue = value;
}

function retrive() {
    return savedValue;
}

module.exports = { store, retrive} ;