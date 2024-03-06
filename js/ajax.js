// Mendefinisikan variabel xhr
const xhr = new XMLHttpRequest();

// Mengatur pengaturan permintaan AJAX
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

// Mengatur fungsi yang akan dijalankan ketika permintaan selesai
xhr.onload = function () {
    // Memeriksa status sukses (status 200)
    if (xhr.status === 200) {
        // Mengolah respons JSON
        const response = JSON.parse(xhr.responseText);

        // Membuat HTML testimoni
        let testimonyHTML = "";
        response.forEach((value) => {
            testimonyHTML += `<div class="testimony-card">
                <div class="card">
                    <div class="image">
                        <img src="https://img.freepik.com/free-photo/confident-young-businessman-suit-standing-with-arms-folded_171337-18599.jpg?t=st=1709279593~exp=1709283193~hmac=cb2f92eb7ffaab7d850d286b67a012fab7db37206178a763ee1ceef995009056&w=740">${value.title}</p>
                        <br>
                        <div class="writer">
                            <p>${value.body}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        });

        // Menetapkan HTML testimoni ke elemen dengan ID 'testimony-container'
        const containerElement = document.getElementById('testimony-container');
        containerElement.innerHTML = testimonyHTML;
    } else {
        // Menangani kesalahan jika permintaan tidak berhasil
        console.error('Gagal mengambil data testimoni.');
    }
};

// Mengirimkan permintaan
xhr.send();
