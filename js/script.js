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

let thumb = document.getElementsByClassName('thumbnail')
thumb[0].classList.add('border_active')

let dark = document.getElementsByClassName('dark')
dark[0].classList.remove('active')
dark[0].classList.add('inactive')

let nextButton = document.getElementById('next')
let prevButton = document.getElementById('prev')
let i = 0


nextButton.addEventListener ('click', function(){
    console.log("Da: " + i)
    if (i < image.length) {
        image[i].classList.remove('active')
        image[i].classList.add('inactive')
        dark[i].classList.remove('inactive')
        dark[i].classList.add('active') 
        thumb[i].classList.remove('border_active')
        i++
        if (i == image.length) {
            i=0
        }
        image[i].classList.remove('inactive')
        image[i].classList.add('active')
        dark[i].classList.remove('active')
        dark[i].classList.add('inactive') 
        thumb[i].classList.add('border_active')

    }
    console.log("A: " + i)
})

prevButton.addEventListener ('click', function(){
    console.log("Da: " + i)
    if (i < image.length) {
        image[i].classList.remove('active')
        image[i].classList.add('inactive')
        dark[i].classList.remove('inactive')
        dark[i].classList.add('active') 
        thumb[i].classList.remove('border_active')
        if (i == 0) {
            i = image.length
        }
        i--
        image[i].classList.remove('inactive')
        image[i].classList.add('active')
        dark[i].classList.remove('active')
        dark[i].classList.add('inactive')
        thumb[i].classList.add('border_active')
    }
    console.log("A: " + i)
})

function imageCreator(arrayLength) {
    let  imagesContainer = document.getElementById('img_container')

    let thumbContainer = document.getElementById('thumb_container')

    for (let i = 0; i < arrayLength; i++) {
        imagesContainer.innerHTML += `
        <div class="image inactive">
            <img src="./img/${images[i].image}" alt="">
            <div class="description">
                <h2>${images[i].title}</h2>
                <p>${images[i].description}</p>
            </div>  
        </div>`

        thumbContainer.innerHTML += `
        <div class="thumbnail">
            <img src="./img/${images[i].image}" alt="">
            <div class="dark active"></div>
        </div>`
    }

}
