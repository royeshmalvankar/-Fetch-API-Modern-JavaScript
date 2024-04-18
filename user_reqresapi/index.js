let tb=document.querySelector('tbody')
let btn=document.getElementById('btn')
let frm=document.getElementById('frm')
let pg=document.getElementById('pg')
let tbd=document.getElementById('tb')


// Function to fetch data
let getdata =(URL)=>{
    fetch(URL)
    .then((res) => res.json())
    .then((fres)=> {
        console.log(fres);
        // calling function to display data
        displaydata1(fres.data)
    })
}

// Function to display data
let displaydata1 = (d)=>{
          // loop to iterate data using forEach 
    d.forEach((ele) =>
    {
    
        let row = document.createElement('tr')
        let id = document.createElement('td')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        let imgt = document.createElement('img')
        td1.appendChild(imgt)
    // putting values using forEach
        id.innerText=ele.id
        imgt.src =ele.avatar
        td2.innerText=ele.first_name
        td3.innerText=ele.last_name
        td4.innerText=ele.email
    // appending values
        row.append(id,td1,td2,td3,td4)
        tb.append(row)
    
    })
}
// calling function to fetch and display data of page 1 so the frontend dont look blank
getdata('https://reqres.in/api/users?page=1')
// calling function to fetch and display data on click event
btn.addEventListener('click',function(){
    tbd.innerHTML=""
 getdata(`https://reqres.in/api/users?page=${pg.value}`)
})
