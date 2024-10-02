const loadAll = async(searchText = 'phone') => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url);
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
    phones.forEach(phone => {
        // console.log(phone);
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

loadAll();