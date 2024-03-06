class Testimony {
    constructor(image, comment, name) {
        this.image = image;
        this.comment = comment;
        this.name = name;
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
            </div>
        </div>`;
    }
}

class TestimonyResult extends Testimony {
    get tagHtml() {
        return `
        <div class="card">
            <div class="image">
                <img src="${this.image}" alt="">
                <p class="testimony">${this.comment}</p>
                <div class="writer">
                    <p>${this.name}</p>
                </div>
            </div>
        </div>`;
    }
}

const testimonies = [
    new Testimony(
        "https://media.istockphoto.com/id/1480292057/id/foto/pengusaha-muda-asia-tersenyum-dengan-tangan-disilangkan-terisolasi-dengan-latar-belakang-putih.jpg?s=612x612&w=is&k=20&c=-PeHZ-mPXxs7NLds7BzEGTks-TytwZHRI9Fix2ascWw=",
        "Hari pertama paling berkesan, bisa tau bagaimana caranya buat web dari nol, keren!!",
        "Sudirman Said"
    ),

];

let html = "";
for (let i = 0; i < testimonies.length; i++) {
    html += testimonies[i].tagHtml;
}

// Menetapkan HTML testimoni ke elemen dengan class 'testimony-card'
const containerCard = document.querySelector(".testimony-card");
containerCard.innerHTML = html;
