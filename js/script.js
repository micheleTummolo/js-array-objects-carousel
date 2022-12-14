let images = [
    {
        image : "01.webp",
        title : "Spider-man",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        image : "02.webp",
        title : "Ratchet & Clank",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        image : "03.webp",
        title : "Fortnite",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        image : "04.webp",
        title : "Stray",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
    {
        image : "05.webp",
        title : "Avengers",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, fuga tenetur."
    },
]

/* First img visible  */
imageCreator(images.length)
let image = document.getElementsByClassName('image')
image[0].classList.remove('inactive')
image[0].classList.add('active')

let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let i = 0

nextButton.addEventListener ('click', function(){
    console.log("Da: " + i)
    if (i < image.length) {
        image[i].classList.remove('active')
        image[i].classList.add('inactive') 
        i++
        if (i == image.length) {
            i=0
        }
        image[i].classList.remove('inactive')
        image[i].classList.add('active')
    }
    console.log("A: " + i)
})

prevButton.addEventListener ('click', function(){
    console.log("Da: " + i)
    if (i < image.length) {
        image[i].classList.remove('active')
        image[i].classList.add('inactive') 
        if (i == 0) {
            i = image.length
        }
        i--
        image[i].classList.remove('inactive')
        image[i].classList.add('active')
    }
    console.log("A: " + i)
})

function imageCreator(arrayLength) {
    let  imagesContainer = document.getElementById('img_container')

    for (let i = 0; i < arrayLength; i++) {
        imagesContainer.innerHTML += `
        <div class="image inactive">
            <img src="./img/${images[i].image}" alt="">
            <div class="description">
                <h2>${images[i].title}</h2>
                <p>${images[i].description}</p>
            </div>  
        </div>`

    }

}
