const table = [
    {
    "/30": [{
        "Host": "4",
        "Netmask": "255.255.255.252",
        "Amount of a Class C": "1/64"
    }]
},

{
    "/29": [{
        "Host": "8",
        "Netmask": "255.255.255.248",
        "Amount of a Class C": "1/32"
    }]
},


{
    "/28": [{
        "Host": "16",
        "Netmask": "255.255.255.240",
        "Amount of a Class C": "1/16"
    }]
},

{
    "/27": [{
        "Host": "32",
        "Netmask": "255.255.255.224",
        "Amount of a Class C": "1/8"
    }]
},

{
    "/26": [{
        "Host": "64",
        "Netmask": "255.255.255.192",
        "Amount of a Class C": "1/4"
    }]
},

{
    "/25": [{
        "Host": "128",
        "Netmask": "255.255.255.128",
        "Amount of a Class C": "1/2"
    }]
},

{
    "/24": [{
        "Host": "256",
        "Netmask": "255.255.255.0",
        "Amount of a Class C": "1"
    }]
},

{
    "/23": [{
        "Host": "512",
        "Netmask": "255.255.254.0",
        "Amount of a Class C": "2"
    }]
},

{
    "/22": [{
        "Host": "1024",
        "Netmask": "255.255.252.0",
        "Amount of a Class C": "4"
    }]
},

{
    "/21": [{
        "Host": "2048",
        "Netmask": "255.255.248.0",
        "Amount of a Class C": "8"
    }]
},

{
    "/20": [{
        "Host": "4096",
        "Netmask": "255.255.240.0",
        "Amount of a Class C": "16"
    }]
},

{
    "/19": [{
        "Host": "8192",
        "Netmask": "255.255.224.0",
        "Amount of a Class C": "32"
    }]
},

{
    "/18": [{
        "Host": "16384",
        "Netmask": "255.255.192.0",
        "Amount of a Class C": "64"
    }]
},

{
    "/17": [{
        "Host": "32768",
        "Netmask": "255.255.128.0",
        "Amount of a Class C": "128"
    }]
},

{
    "/16": [{
        "Host": "65536",
        "Netmask": "255.255.0.0",
        "Amount of a Class C": "256"
    }]
}

]

console.table(table[10]);

console.log(table)

console.table(["apples", "oranges", "bananas"]);