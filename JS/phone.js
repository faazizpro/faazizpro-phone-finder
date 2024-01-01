const loadPhone = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones)
};

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone =>{
        console.log(phone);
        // 2. Create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card max-w-96 mx-auto bg-base-100 shadow-2xl p-5`;
        phoneCard.innerHTML =  `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body flex flex-col items-center">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary bg-blue-500 text-white">Show Details</button>
          </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
};



loadPhone()