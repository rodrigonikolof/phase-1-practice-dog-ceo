const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';





fetch(imgUrl)
.then(response => response.json())
.then(results => {
    const dogDiv = document.querySelector('#dog-image-container');

    for (let i = 0; i < results.message.length ; i++){
        dogDiv.innerHTML += `<img src="${results.message[i]}" class="pic-size">`; 
    }
    // console.log(results.message.length)
})

fetch(breedUrl)
.then (response => response.json())
.then (data => {
        const dogList = document.querySelector('#dog-breeds');
        
        let dogs = data.message;
            for (let dog in dogs){
                    let dogName = document.createElement('li');
                    dogName.innerHTML = dog;
                    dogList.appendChild(dogName);
                    dogName.addEventListener('click', (e)=> {
                        e.target.style.color = 'red';
                    })

                    // dogList.innerHTML += `<li class="doggos"> ${dog} </li>`;
                 }
            })


         const doggos = document.querySelectorAll('li');
         console.log(doggos)
