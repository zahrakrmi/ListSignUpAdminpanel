



const list=document.getElementById('list')
const search=document.getElementById('search')


search.addEventListener('keyup', ()=>{
    let temp = search.value.toLowerCase();


    const li = document.querySelectorAll('ul>li>span:nth-of-type(2)')
    li.forEach((val)=>{
        if(
            val.innerText.indexOf(temp) >= 0
        ){
            val.parentElement.style.display='block'

        }else{
            val.parentElement.style.display='none'
        }
    })

})





fetch('https://6740a095d0b59228b7f0c373.mockapi.io/SignUpForm', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }




    // handle error
}).then(tasks => {
    // Do something with the list of tasks
    tasks.map((val)=>{
        let li = document.createElement('li')
        
        li.innerHTML = `
            <span>${'ID: '+val.id}</span>
            <span>${'Name: '+val.name}</span>
            <span>${'LastName: '+val.lastName}</span>
            <span>${'Desc: '+val.desc}</span>
            <span>${'City: '+val.city}</span>
            <img src=${val.img} />
        `
        list.appendChild(li)
    })
}).catch(error => {
    // handle error
})