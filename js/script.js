function booking(mobil){

    document.getElementById("mobil").value = mobil;

    document.getElementById("bookingModal").style.display = "flex";

}

function tutupBooking(){

    document.getElementById("bookingModal").style.display = "none";

}

function kirimBooking(){

    let mobil = document.getElementById("mobil").value;
    let nama = document.getElementById("nama").value;
    let wa = document.getElementById("wa").value;
    let tglSewa = document.getElementById("tglSewa").value;
    let tglKembali = document.getElementById("tglKembali").value;
    let lokasi = document.getElementById("lokasi").value;

    if(nama=="" || wa=="" || tglSewa=="" || tglKembali=="" || lokasi==""){
        alert("Mohon lengkapi semua data.");
        return;
    }

    let pesan =
`Halo YU Transport.

Saya ingin booking mobil.

🚗 Mobil : ${mobil}

👤 Nama : ${nama}

📱 WhatsApp : ${wa}

📅 Tanggal Sewa : ${tglSewa}

📅 Tanggal Kembali : ${tglKembali}

📍 Lokasi Penjemputan : ${lokasi}

Mohon informasi ketersediaannya.`;

    window.open(
        "https://wa.me/6281999582803?text=" + encodeURIComponent(pesan),
        "_blank"
    );

    tutupBooking();

}

// ===============================
// BOOKING AIRPORT TRANSFER
// ===============================

function bookingTransfer(rute, harga){

    let pesan = `Halo PT. Yuu Transport Lombok.

Saya ingin memesan Airport Transfer.

📍 Rute : ${rute}
💰 Harga : ${harga}

Mohon informasi ketersediaannya.

Terima kasih.`;

    window.open(
        "https://wa.me/628199582803?text=" + encodeURIComponent(pesan),
        "_blank"
    );

}

function bookingHero(){

    let pesan = `Halo PT. Yuu Transport Lombok.

Saya ingin menyewa mobil di Lombok.

Mohon informasi mengenai:

• Harga rental
• Unit yang tersedia
• Cara booking

Terima kasih.`;

    window.open(
        "https://wa.me/628199582803?text=" + encodeURIComponent(pesan),
        "_blank"
    );

}