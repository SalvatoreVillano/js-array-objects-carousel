const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const carousel = document.querySelector('.carousel')
const thumb = document.querySelector('.carousel-thumb')
const btnNext = document.getElementById('btnNext')
const btnPrev = document.getElementById('btnPrev')
const img = []
const thumbImg = []
let activeImg = 0


images.forEach((e) => {

    let carouselImg = document.createElement('div')
    carouselImg.classList.add('col', 'carousel-img', 'd-none', 'card')
    carouselImg.innerHTML = `
                            <img src="${e.url}">
                            <div class="card-img-overlay">
                                <h2 class="fw-bold text-white fs-2 position-absolute">${e.title}</h2>
                                <p class="fs-5 text-white fw-bold">${e.description}</p>
                            </div>
                            `
    carousel.append(carouselImg)
    img.push(carouselImg)
    let thumbItem = document.createElement('div')
    thumbItem.classList.add('col', 'border', 'item', 'card')
    thumbItem.innerHTML = `
                            <img src="${e.url}">
                            </div>
                            `
    thumb.append(thumbItem)
    thumbImg.push(thumbItem)
})
img[activeImg].classList.remove('d-none')
thumbImg[activeImg].classList.add('border-3', 'border-danger')
for (let i = 0; i < thumbImg.length; i++){
    thumbImg[i].addEventListener('click', () => {
        thumbImg[activeImg].classList.remove('border-3', 'border-danger')
        img[activeImg].classList.add('d-none')
        activeImg = i
        img[activeImg].classList.remove('d-none')
        thumbImg[i].classList.add('border-3', 'border-danger')
    })
}

btnNext.addEventListener('click', () => {
    nextBtn()
})
btnPrev.addEventListener('click', () => {
    prevBtn()
})

const autoPlay = setInterval(() => {
    nextBtn()

    if (activeImg == img.length - 1){
        thumbImg[activeImg].classList.remove('border-3', 'border-danger')
        img[activeImg].classList.add('d-none')
        activeImg = 0;
        img[activeImg].classList.remove('d-none')
        thumbImg[activeImg].classList.add('border-3', 'border-danger')
    }
}, 3000)

function nextBtn(){
    if(activeImg == img.length - 1 ){
        thumbImg[activeImg].classList.remove('border-3', 'border-danger')
        img[activeImg].classList.add('d-none')
            activeImg++
           activeImg = 0;
           img[activeImg].classList.remove('d-none')
           thumbImg[activeImg].classList.add('border-3', 'border-danger')
    } else{
        thumbImg[activeImg].classList.remove('border-3', 'border-danger')
        img[activeImg].classList.add('d-none')
           activeImg++
           img[activeImg].classList.remove('d-none')
           thumbImg[activeImg].classList.add('border-3', 'border-danger')
    }

}
function prevBtn(){
    if(activeImg == 0){
        thumbImg[activeImg].classList.remove('border-3', 'border-danger')
        img[activeImg].classList.add('d-none')
        activeImg = img.length - 1
        img[activeImg].classList.remove('d-none')
        thumbImg[activeImg].classList.add('border-3', 'border-danger')
    } else{
        thumbImg[activeImg].classList.remove('border-3', 'border-danger')
        img[activeImg].classList.add('d-none')
        activeImg--
        img[activeImg].classList.remove('d-none')
        thumbImg[activeImg].classList.add('border-3', 'border-danger')
    }
}