const loadPhone = async(getPhone) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${getPhone}`);
    const data = await res.json();
    const phones = data.data;
    displayPhone(phones)
};

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    
    const showBtn = document.getElementById('showbtn');
  
    if(phones.length > 9){
      showBtn.classList.remove('hidden')
    }
    else{
      showBtn.classList.add('hidden');
    }

    // Sliced Phones number: Display first 5 phone
    phones = phones.slice(0,10);

    phones.forEach(phone =>{
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
        
    });

    // Hide Loader:
    toggleLoading(false);
};

document.addEventListener('DOMContentLoaded', function(){
  const searchedPhone = document.getElementById('phone-name');
  const searchedButton = document.getElementById('search');

  searchedPhone.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
      performSearch();
    }
  });

    searchedButton.addEventListener('click', function(){
      toggleLoading(true);
      performSearch();
    });




  function performSearch(){
    const findPhone = searchedPhone.value;
    loadPhone(findPhone)
  }
})


const toggleLoading = (isLoading) =>{
  const toggle = document.getElementById('loader');
  if(isLoading){
    toggle.classList.remove('hidden');
  }
  else{
    toggle.classList.add('hidden');
  }
}

const handleShowAll = () =>{
  
}

loadPhone()