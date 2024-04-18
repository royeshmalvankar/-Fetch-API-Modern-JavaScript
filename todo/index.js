let root = document.getElementById("root");
let bt = document.getElementById("btn");

// Function to fetch data 
let getdata =  (URL) => {
     fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        showdata(data)
    })
}

// Function to show data on dom
let showdata = (data) => {
    // loop to iterate data
    data.forEach((element) => {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = `ID: ${element.id}`
        let p1 = document.createElement("p");
        p1.innerText =`Title:${element.title}`
        let p2 = document.createElement("p");
        p2.innerText = `Completed: ${element.completed}`
        div.append(p,p1,p2)
        root.append(div)
    })   
}

// calling function to fetch and show data on click event
bt.addEventListener("click", () => {
    getdata("https://jsonplaceholder.typicode.com/todos");
})