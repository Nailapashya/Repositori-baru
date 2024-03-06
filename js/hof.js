class Testimony {
    constructor(image, comment, name, rating) {
        this.image = image;
        this.comment = comment; 
        this.name = name;
        this.rating = rating;
    }

    get tagHtml() { 
        return `
        <div class="card">
            <div class="image">
                <img src="${this.image}" alt="">
                <p class="testimony">${this.comment}</p>
                <div class="writer">
                    <p>${this.name}</p>
                </div>
                <div class="rating">
                    ${this.rating}
                </div>
            </div>
        </div>`;
    }
}

class TestimonyResult extends Testimony {
    get tagHtml() { 
        return`
        <div class="card">
            <div class="image">
                <img src="${this.image}" alt="">
                <p class="testimony">${this.comment}</p>
                <div class="writer">
                    <p>${this.name}</p>
                </div>
                <div class="rating"
                    ${this.rating}
                </div>
            </div>
        </div>`;
    }
}

const testimonies = [ 
    new Testimony(
        "https://media.istockphoto.com/id/1480292057/id/foto/pengusaha-muda-asia-tersenyum-dengan-tangan-disilangkan-terisolasi-dengan-latar-belakang-putih.jpg?s=612x612&w=is&k=20&c=-PeHZ-mPXxs7NLds7BzEGTks-TytwZHRI9Fix2ascWw=",
        "Hari pertama paling berkesan, bisa tau bagaimana caranya buat web dari nol, keren!!",
        "Sudirman Said",
        5 
    ),
    new Testimony(
        "https://media.istockphoto.com/id/875879358/id/foto/potret-wanita-pengusaha-asia-yang-terisolasi-dengan-latar-belakang-putih.jpg?s=612x612&w=is&k=20&c=QOCryHMNpkEli1FusVgBV2D0NKwpbnbcDjAfCjwBkjE=",
        "Tutornya juga ramah-ramah dengan karakternya masing-masing",
        "Naila Pashya",
        4 
    ),
    new Testimony(
        "https://media.istockphoto.com/id/1470636944/id/foto/nyali-berpose-karyawan.jpg?s=612x612&w=0&k=20&c=kfpskmfrLR8ifVHhW9tSVjlQKSDMnuTbVERxvSI4u_g=",
        "Keren banget dan mudah dipahami",
        "Hemna",
        3 
    )
];

console.log(Testimony);
let html = "";
for (let i = 0; i < testimonies.length; i++) { 
    html += testimonies[i].tagHtml; 
}

const containerCard = document.querySelector(".container-card"); 
containerCard.innerHTML = html;

const filterStar = (rating) => {
    let dataHTML = '';

    const dataFiltered = testimonies.filter((data) => {
        return data.rating === rating || rating === 'all';
    });

    if (!dataFiltered.length) {
        dataHTML += '<h2> Data not found </h2>';
    } else {
        dataFiltered.forEach((data) => {
            console.log(data);
            dataHTML += `
            <div class="testimonial">
                <img class="image" src="${data.image}" alt="">
                <p class="comment">${data.comment}</p>
                <p class="writter">${data.name}</p>
            </div>`;
        });
    }

    document.getElementById("testimonials").innerHTML = dataHTML;
};
