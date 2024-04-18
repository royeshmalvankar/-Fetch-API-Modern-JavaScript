let root = document.getElementById("root")
let sort = document.getElementById("sort")
let btn = document.getElementById("btn")

// Function to fetch data
let getdata = (URL) => {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
            // calling function to show data
            showdata(data.data)
        })
}

// Function to show data
let showdata = (data) => {
    // loop to iterate data using forEach 
    data.forEach((element) => {
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        h2.innerText = element.country
        let p1 = document.createElement("b")
        p1.innerText = `Population: ${element.population}`
        let p2 = document.createElement("p")
        p2.innerText = `Rank: ${element.Rank}`
        
        // appending values
        div.append(h2, p1, p2)
        root.append(div)
    })
}
// calling function to fetch and display data
getdata("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")

// calling function to sort data on click event
btn.addEventListener("click", () => {
    // clearing previous data
    root.innerHTML = ""
    getdata(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries${sort.value}`)
})

