// 1. Fungsi Buka Undangan & Play Musik
const audio = document.getElementById('nasheed');

function openInvitation() {
    // 1. Paksa putar musik
    const audio = document.getElementById("nasheed");
    if (audio) {
        audio.play();
    }

    // 2. Ambil elemen target
    const target = document.querySelector("#main-content");
    
    if (target) {
        // Gunakan getBoundingClientRect biar dapat posisi asli di layar
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        
        // Eksekusi scroll manual
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    } else {
        // Kalau muncul alert ini, berarti ID di HTML kamu bukan 'main-content'
        alert("ID main-content nggak ada di HTML, Cok!");
    }
}

// 2. Kontrol Musik (Play/Pause)
function toggleMusic() {
    const btn = document.getElementById('music-btn');
    if (audio.paused) {
        audio.play();
        btn.innerText = "🎵";
    } else {
        audio.pause();
        btn.innerText = "🔇";
    }
}

// 3. Hitung Mundur (Countdown)
// Target tanggal: 28 Maret 2026 jam 09:00
const targetDate = new Date("March 28, 2026 09:00:00").getTime();

const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Kalkulasi Waktu
    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    // Update ke HTML
    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('mins').innerText = m;
    document.getElementById('secs').innerText = s;

    // Jika waktu habis
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector(".countdown-container").innerHTML = "ACARA SEDANG BERLANGSUNG";
    }
}, 1000);

function sendToWA(tujuan) {
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
    
    // --- SETTING NOMOR DI SINI ---
    const noWanita = "6281268184765"; // Ganti nomor Wyvanny
    const noPria = "6282297577745";   // Ganti nomor Destra
    // ----------------------------

    if (nama === "" || ucapan === "") {
        alert("Isi nama dan ucapan dulu ya!");
        return;
    }

    let nomorTujuan = (tujuan === 'wanita') ? noWanita : noPria;
    let targetNama = (tujuan === 'wanita') ? "Wyvanny" : "Destra";

    const pesan = `Halo ${targetNama}, saya *${nama}*.\n\nBerikut ucapan & doa restu saya:\n"${ucapan}"`;
    const url = `https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(pesan)}`;

    window.open(url, '_blank');
}