//task1

// let body = document.querySelector("body")

// let table = document.createElement("table")
// let thead = document.createElement("thead")
// let tbody = document.createElement("tbody")
// let headRow = document.createElement("tr")
// let companyName = document.createElement("th")
// let contactName = document.createElement("th")
// let country = document.createElement("th")

// companyName.innerText = "Company Name"
// contactName.innerText = "Contact Name"
// country.innerText = "Country"


// headRow.appendChild(companyName)
// headRow.appendChild(contactName)
// headRow.appendChild(country)

// thead.appendChild(headRow)

// table.appendChild(thead)
// table.appendChild(tbody)

// body.appendChild(table)

// // fetch("https://northwind.vercel.app/api/suppliers")
// //     .then(res => res.json())
// //     .then(data => {
// //         // data.forEach(element => {
// //         //     createRow(element)
// //         // });

// //         for(let i = 0; i<data.length; i++){
// //             createRow(data[i])
// //         }
// //     })

// axios.get("https://northwind.vercel.app/api/suppliers")
//     .then(res => {
//         res.data.forEach(element => {
//             createRow(element)
//         });
//     })


//task 2

let tbody = document.querySelector("tbody")
let input = document.querySelector("input")
let btn = document.querySelector("button")

btn.addEventListener("click", function(){
    axios.get("https://northwind.vercel.app/api/suppliers")
        .then(res => {
            tbody.innerHTML = ""
            let data = res.data.filter(x=> x.companyName.toLowerCase().includes(input.value.toLowerCase()))
            data.forEach(element => {
                createRow(element)
            });
            input.value=""
        })
})

function createRow (element){
    let row = document.createElement("tr")
    let companyName = document.createElement("td")
    let contactName = document.createElement("td")
    let country = document.createElement("td")

    companyName.innerText = element.companyName
    contactName.innerText = element.contactName
    country.innerText = element.address.country

    row.appendChild(companyName)*
    row.appendChild(contactName)
    row.appendChild(country)

    tbody.appendChild(row)
}