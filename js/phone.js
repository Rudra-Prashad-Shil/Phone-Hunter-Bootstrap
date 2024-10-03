const loadAll = async(searchText = 'iphone') => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayPhones(data.data);
    } catch (error) {
        console.log(error);
    }
}
const displayPhones = phones => {
    const phoneCont = document.getElementById('phones-container');
    const notFoundCont = document.getElementById('not-found-cont');
    const btnShowAll = document.getElementById('btn-show-all');
    phoneCont.innerText='';
    if(phones.length === 0){
        notFoundCont.classList.remove('d-none');
        btnShowAll.classList.add('d-none');
    }
    else{
        notFoundCont.classList.add('d-none');
        if(phones.length >= 8){
            // phones = phones.slice(0,8);
            btnShowAll.classList.remove('d-none');
            
            btnShowAll.addEventListener('click',() => {
                // phones = phones.slice(0,phones.length);
                btnShowAll.classList.add('d-none');
            })
        }
        else{
            btnShowAll.classList.add('d-none');
        }
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card h-100 p-5">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phoneCont.appendChild(phoneDiv);
    });
}

document.getElementById('btn-search').addEventListener('click',() => {
    let searchVal = document.getElementById('search-field').value;
    if(searchVal === ''){
        return;
    }
    loadAll(searchVal);
    document.getElementById('search-field').value = '';
})
loadAll();