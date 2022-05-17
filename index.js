const URL = `https://api.openbrewerydb.org/breweries`

const getData = async() => {
    let res = await fetch(URL)
    let data = await res.json()

    console.table(data)
    displayData(data)
}

getData()


let cont_div = document.getElementById("container")
const displayData = (data) => {
    let theading = ["Name", "Brewery_type", "City", "State"]
    console.log(theading)

    let table = document.createElement("table")
    table.classList.add("table")
    
    let thead = document.createElement("thead")
    
    let table_row = document.createElement("tr")
    
    theading.forEach((el) => {

        let th = document.createElement("th")
        th.innerHTML = el

        table_row.append(th)
    })

    let tbody = document.createElement("tbody")
        data.forEach((el) => {
            let tr = document.createElement("tr")

            let tdname = document.createElement("td")
            tdname.innerHTML = el.name

            let ttype = document.createElement("td")
            ttype.innerHTML = el.brewery_type

            let tdcity = document.createElement("td")
            tdcity.innerHTML = el.city

            let tdstate = document.createElement("td")
            tdstate.innerHTML = el.state

            let moreDetails = document.createElement("button")
            moreDetails.innerHTML = "MORE DETAILS"
            moreDetails.classList.add("btn", "btn-outline-primary")
           
            moreDetails.addEventListener("click", function(){
                console.log(el.id)
                localStorage.setItem("brewery_id", JSON.stringify(el.id))
            })
            
            tr.appendChild(tdname)
            tr.appendChild(ttype)
            tr.appendChild(tdcity)
            tr.appendChild(tdstate)
            tr.appendChild(moreDetails)
            tbody.appendChild(tr);
            
        })
    thead.append(table_row)
    table.append(thead, tbody)
    cont_div.append(table)
}



const getList = async() => {

    let select_list = document.getElementById("options").value;
    console.log(select_list)

    let url = `https://api.openbrewerydb.org/breweries?by_type=${select_list}&per_page=3`


    let res = await fetch(url)
    let data = await res.json()

    console.log(data)
    displayRes(data)

}


let res_div = document.getElementById("result")

const displayRes = (data) => {

    res_div.innerHTML = ""

    let theading = ["Name", "Brewery_type", "City", "State"]
    console.log(theading)

    let table = document.createElement("table")
    table.classList.add("table")
    
    let thead = document.createElement("thead")
    
    let table_row = document.createElement("tr")
    
    theading.forEach((el) => {

        let th = document.createElement("th")
        th.innerHTML = el

        table_row.append(th)
    })

    let tbody = document.createElement("tbody")
        data.forEach((el) => {
            let tr = document.createElement("tr")

            let tdname = document.createElement("td")
            tdname.innerHTML = el.name

            let ttype = document.createElement("td")
            ttype.innerHTML = el.brewery_type

            let tdcity = document.createElement("td")
            tdcity.innerHTML = el.city

            let tdstate = document.createElement("td")
            tdstate.innerHTML = el.state
            
            tr.appendChild(tdname)
            tr.appendChild(ttype)
            tr.appendChild(tdcity)
            tr.appendChild(tdstate)
            tbody.appendChild(tr);
            
        })
    thead.append(table_row)
    table.append(thead, tbody)
    
    res_div.append(table)

}