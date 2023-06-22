var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
let tbody = document.querySelector('tbody');
const filter= document.getElementById('search-box')
let userList= [];

fetch(url)
    .then(res=>{
        return res.json();
    })
    .then(data=>{
       
        data.forEach((user)=>{
           /* console.log(user) */
            const table = document.createElement('tr')
            table.classList.add('data-row')
            let information = document.createElement('div');
            information.setAttribute('id','#info-content')
            information.style.display='none'
            table.innerHTML=`
            <td class="column1">${user.id}</td>
            <td class="column2">${user.firstName}</td>
            <td class="column3">${user.lastName}</td>
            <td class="column4">${user.email}</td>
            <td class="column5">${user.phone}</td>
            `
            tbody.append(table)
            
        })
      
        const dataRow = document.querySelectorAll('.data-row')
        dataRow[0].classList.add('active')
        /* console.log(dataRow) */
       
        dataRow.forEach((item)=>{
            userList.push(item)
        })
        for (let i = 0; i < dataRow.length; i++) {
            dataRow[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active");
            let information = document.querySelector('#info-content');
            information.style.display="block";
            var info_content = document.getElementById('info-content')
            info_content.style.display='block'
            info_content.innerHTML=''
            var div = document.createElement('div')
            div.innerHTML = "<b> User selected: </b>" + data[i].firstName + data[i].lastName;
            var divdescription =  document.createElement('div')
            divdescription=document.createTextNode('Description:')
            var textarea = document.createElement('textarea');
            textarea.cols = "50";
            textarea.rows = "5";
            textarea.setAttribute('readonly', 'readonly');
            var textareatxt = document.createTextNode(data[i].description)
            textarea.appendChild(textareatxt)
            var divadrssstret = document.createElement('div')
            divadrssstret.innerHTML = "<b> Address: </b>" + data[i].address.streetAddress;
            var divadrsscity = document.createElement('div')
            divadrsscity.innerHTML = "<b>  City: </b>" + data[i].address.city;
            var divadrssstate = document.createElement('div')
            divadrssstate.innerHTML = "<b> State: </b>" + data[i].address.state;
            var divadrsszip = document.createElement('div')
            divadrsszip.innerHTML = "<b> Zip: </b>" + data[i].address.zip;
            info_content.appendChild(div)
            info_content.appendChild(divdescription)
            info_content.appendChild(textarea)
            info_content.appendChild(divadrssstret)
            info_content.appendChild(divadrsscity)
            info_content.appendChild(divadrssstate)
            info_content.appendChild(divadrsszip)
            
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
            });
          }
        
    })

    function filterUserData(searchInput){

        userList.forEach(item=>{
            
            if(item.innerText.toLowerCase().includes(searchInput.toLowerCase())){
                item.classList.remove('hide')
            }
            else{
                item.classList.add("hide")

            }
        })
    
    }
    
    filter.addEventListener("input",(e)=>{    
        filterUserData(e.target.value) //search input 
    })

    