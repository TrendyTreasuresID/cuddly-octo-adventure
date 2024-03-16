document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const text = "Produk : " + formData.get("produk") + "\n" + "\n" +
                     "Harga : " + formData.get("harga") + "\n" + "\n" +
                     "Metode Pembayaran : " + formData.get("metode") + "\n" + "\n" +
                     "Nama : " + formData.get("nama") + "\n" + "\n" +
                     "No WhatsApp : " + formData.get("kontak") + "\n" + "\n" +
                     "Alamat : " + formData.get("alamat") + "\n" + "\n" +
                     "RT/RW : " + formData.get("rt") + "/" + formData.get("rw") + "\n" + "\n" +
                     "Kelurahan : " + formData.get("kelurahan") + "\n" + "\n" +
                     "Kecamatan : " + formData.get("kecamatan") + "\n" + "\n" +
                     "Kota/Kabupaten : " + formData.get("kota") + "\n" + "\n" +
                     "Provinsi : " + formData.get("provinsi");

        const chatId = "6082930996";
        const botToken = "6986545110:AAHcWP18jdttDrO6__KxbA8IQI1s6Drfnwk";

        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                alert("Pesanan telah dikirim!. Pesanan akan kami proses secepatnya dan akan kami informasikan lebih lanjut melalui WhatsApp, Terima Kasih. 🙂🙏🏼");
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                alert("Gagal mengirim pesanan. Silakan coba lagi.");
            });
    });
});
