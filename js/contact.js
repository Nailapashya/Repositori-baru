function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name === "") {
        return alert("Nama harus di isi");
    } else if (email === "") {
        return alert("Email harus di isi");
    } else if (phoneNumber === "") {
        return alert("Phone number belum di isi");
    } else if (subject === "") {
        return alert("Subject harus di isi");
    } else if (message === "") {
        return alert("Message harus di isi");
    }

    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(subject);
    console.log(message);

    alert("Data telah berhasil dikirim");

    const emailDestination = "nailapashyaalrazy@gmail.com";
    let a = document.createElement('a');
    a.href = `mailto:${emailDestination}?subject=${subject}&body=${encodeURIComponent(message)}`;

    a.click();

    const data = {
        name,
        email,
        phoneNumber,
        subject,
        message,
    };
    console.log(data);
}
