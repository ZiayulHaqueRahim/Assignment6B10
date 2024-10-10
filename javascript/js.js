
// All show:
const loadAllResult = async() => {
    
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await response.json();
    showAllResult(data.pets)


}



const showAllResult = (pets) => {
    
    const petContainer = document.getElementById('card-container')
    pets.forEach((pet) => {
        console.log(pet)
        const div = document.createElement('div');
        div.classList = 'max-w-30';
        petContainer.classList = 'grid grid-cols-3 gap-2'
        div.innerHTML = `
            <div class="card bg-base-100 py-3 m-3">
                    <figure class=" pt-3">
                        <img
                        src="${pet.image}"
                        class="rounded-xl" />
                    </figure>
                    <h3 class=' font-bold'> ${pet.pet_name} </h3>
                    <P>Breed:  ${pet.breed}</p>
                    <P>Birth:  ${pet.date_of_birth}</p>
                    <P>gender:  ${pet.gender}</p>
                    <P>Price:  $${pet.price}</p>
                <div class=" flex flex-row justify-between">
                    <button class="btn btn-outline btn-success">Like</button>
                    <button class="btn btn-outline btn-success">Adopt</button>
                    <button class="btn btn-outline btn-success">Details</button>
                </div>
            </div>
        `
        petContainer.appendChild(div)
    });
   
    

}

loadAllResult();

//categorize dogs:
 const loadDogs = async() => {
        const response = await fetch('https://openapi.programming-hero.com/api/peddy/category/dog');
        const data = await response.json();
        console.log(data.data)
        showDogs(data.data)
 }

 const showDogs = (dogs) => {
      
    document.getElementById('card-container').style.display='none'
     const dogContainer = document.getElementById('dog-container')
     
    
    dogs.forEach((dog) => {
        console.log(dog)
         
        const section = document.createElement('div');
        section.classList = 'max-w-30';
       
        section.innerHTML = `
            <div class="card bg-base-100 py-3 m-3">
                    <figure class=" pt-3">
                        <img
                        src="${dog.image}"
                        class="rounded-xl" />
                    </figure>
                    <h3 class=' font-bold'> ${dog.pet_name} </h3>
                    <P>Breed:  ${dog.breed}</p>
                    <P>Birth:  ${dog.date_of_birth}</p>
                    <P>gender:  ${dog.gender}</p>
                    <P>Price:  $${dog.price}</p>
                <div class=" flex flex-row justify-between">
                    <button class="btn btn-outline btn-success">Like</button>
                    <button class="btn btn-outline btn-success">Adopt</button>
                    <button class="btn btn-outline btn-success">Details</button>
                </div>
            </div>
        `
        dogContainer.appendChild(section)
    });

    dogContainer.classList = 'grid grid-cols-3 gap-2'
    
 }


 //categorize cats:
 const loadCats = async() => {
        const response = await fetch('https://openapi.programming-hero.com/api/peddy/category/cat');
        const data = await response.json();
        console.log(data.data)
        showCats(data.data)
 }

 const showCats = (cats) => {
      
    document.getElementById('card-container').style.display='none'
     const catContainer = document.getElementById('cat-container')
     
    
    cats.forEach((cat) => {
        console.log(cat)
         
        const section = document.createElement('div');
        section.classList = 'max-w-30';
       
        section.innerHTML = `
            <div class="card bg-base-100 py-3 m-3">
                    <figure class=" pt-3">
                        <img
                        src="${cat.image}"
                        class="rounded-xl" />
                    </figure>
                    <h3 class=' font-bold'> ${cat.pet_name} </h3>
                    <P>Breed:  ${cat.breed}</p>
                    <P>Birth:  ${cat.date_of_birth}</p>
                    <P>gender:  ${cat.gender}</p>
                    <P>Price:  $${cat.price}</p>
                <div class=" flex flex-row justify-between">
                    <button class="btn btn-outline btn-success">Like</button>
                    <button class="btn btn-outline btn-success">Adopt</button>
                    <button class="btn btn-outline btn-success">Details</button>
                </div>
            </div>
        `
        catContainer.appendChild(section)
    });

    catContainer.classList = 'grid grid-cols-3 gap-2'
    
 }

//categorize rabits:

const loadRabits = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/category/rabbit');
    const data = await response.json();
    console.log(data.data)
    showRabits(data.data)
}

const showRabits = (rabits) => {
  
document.getElementById('card-container').style.display='none'
 const rabitContainer = document.getElementById('rabit-container')
 

rabits.forEach((rabit) => {
    console.log(rabit)
     
    const section = document.createElement('div');
    section.classList = 'max-w-30';
   
    section.innerHTML = `
        <div class="card bg-base-100 py-3 m-3">
                <figure class=" pt-3">
                    <img
                    src="${rabit.image}"
                    class="rounded-xl" />
                </figure>
                <h3 class=' font-bold'> ${rabit.pet_name} </h3>
                <P>Breed:  ${rabit.breed}</p>
                <P>Birth:  ${rabit.date_of_birth}</p>
                <P>gender:  ${rabit.gender}</p>
                <P>Price:  $${rabit.price}</p>
            <div class=" flex flex-row justify-between">
                <button class="btn btn-outline btn-success">Like</button>
                <button class="btn btn-outline btn-success">Adopt</button>
                <button class="btn btn-outline btn-success">Details</button>
            </div>
        </div>
    `
    rabitContainer.appendChild(section)
});

rabitContainer.classList = 'grid grid-cols-3 gap-2'

}

//categorizing birds:

const loadBirds = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/peddy/category/bird');
    const data = await response.json();
    console.log(data.data)
    showBirds(data.data)
}

const showBirds = (birds) => {
  
    document.getElementById('card-container').style.display='none'
     const birdContainer = document.getElementById('bird-container')        
        const section = document.createElement('div');
        section.classList = 'max-w-30';
        birdContainer.classList = 'grid grid-cols-3 gap-2'
        section.innerHTML = `
            <div class="card bg-base-100 py-3 m-3">
                    <figure class=" pt-3">
                        <img
                        src="images/error.webp"
                        class="rounded-xl" />
                    </figure>
                    
            </div>
        `
        birdContainer.appendChild(section)
    };
    
   
    
