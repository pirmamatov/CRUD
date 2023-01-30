
const __tBody = document.getElementById('tBody');
const __modalBtn = document.getElementById('modal-btn');
// __tBody.innerHTML = html

const URL = 'https://63cff527109824043789f358.mockapi.io/user';


window.onload = async () => {
    render(await getUsers())
}



async function getUsers (){
    loading(true)
    try{
     const response = await fetch(URL)
     const body = await response.json()
     loading(false)
     return body
    } catch(error){
        errorMessage(error.message)
    }

}






function errorMessage(message ){
    document.body.innerHTML =  `<div class="fixed w-full bg-red-200 h-full  top-0 left-0 flex justify-center items-center">
            <p class="text-red-700 uppercase border-l-4 border-white pl-6  ">
                ${message}
            </p>
        </div>`

}
function loading(state = false){
    const __loading = document.getElementById('loading');
    if(state){
        __loading.classList.add('block')
    } else{
        __loading.classList.add('hidden')
    }
   
    
}
// loading  ()




function render (users){
    let html = ''
    users.forEach(user => {
        html += `
        <tr>
        <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
         ${user.name}
        </th>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
        ${user.age}
        </td>
        <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        ${user.job}
        </td>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
          ${user.salary}
        </td>
        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <button class="px-4 py-2 bg-emerald-400 rounded">Edit</button>
            <button class="px-4 py-2 bg-red-600 rounded text-white">Delete</button>
        </td>
        </tr>
        `
    })
    __tBody.innerHTML = html;
}



__modalBtn.addEventListener('click', ()=>{
    
})

