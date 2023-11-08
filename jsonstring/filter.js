const employee = {
    id: 1, 
    name: "Raj",
    address: {
        city: "Surat", 
        state: "Gujarat",
        country: "India"
    }
};

const filters = ["name", "address", "city", "country"];
    const filterEmployee = JSON.stringify(employee, filters);
    console.log(filterEmployee);

    // FILTER WITH JSON.STRINGIFY
    // JSON.stringify has an optional 2nd parameter
    // - a replacer or filter that can be a function or an array.
    // The 2nd parameter is an array, it specifies by name which entries to include in the stringify output.
    