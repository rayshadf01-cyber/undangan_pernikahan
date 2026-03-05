const audio = document.getElementById('nasheed');

function openInvitation() {
    const cover = document.querySelector(".hero");
    const mainContent = document.getElementById("main-invitation");
    const musicBtn = document.getElementById("music-btn");

    // 1. Putar musik
    if (audio) {
        audio.play();
    }

    // 2. Munculkan konten di belakang cover
    mainContent.style.display = "block";
    musicBtn.style.display = "flex";

    // 3. Jalankan animasi geser cover ke atas
    cover.classList.add("slide-up");

    // 4. Buka kunci scroll body setelah animasi selesai
    setTimeout(() => {
        document.body.classList.remove("locked");
        cover.style.display = "none"; // Hilangkan total biar ga berat
    }, 1000);
}

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

// Countdown
const targetDate = new Date("March 28, 2026 09:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) return;

    document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('mins').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('secs').innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

function sendToWA(tujuan) {
    const nama = document.getElementById('nama').value;
    const ucapan = document.getElementById('ucapan').value;
    if (!nama || !ucapan) {
        alert("Isi nama dan ucapan dulu!");
        return;
    }

    const noWanita = "6281268184765";
    const noPria = "6282297577745";
    const nomorTujuan = (tujuan === 'wanita') ? noWanita : noPria;
    const targetNama = (tujuan === 'wanita') ? "Wyvanny" : "Destra";

    const pesan = `Halo ${targetNama}, saya *${nama}*.\n\nBerikut ucapan & doa restu saya:\n"${ucapan}"`;
    window.open(`https://api.whatsapp.com/send?phone=${nomorTujuan}&text=${encodeURIComponent(pesan)}`, '_blank');
}
// Data Cerita (Ganti isinya sesuai keinginan lu)
const storyData = {
    cerita1: {
        title: "Cerita berawal dari...",
        desc: "Cerita Berawal dari Kebutuhan akan bantuan dalam pekerjaan membuat Destra harus mencari kandidat tambahan dan saat itu diputuskan 3 kandidat yang akan diwawancarai Destra. Sesi wawancara dan penilaian atas dokumen lamaran dilakukan Destra ke semua kandidatnya, namun ada 1 perempuan berkerudung yang berhasil memikat perhatian Destra. Setelah diskusi panjang dikantor akhirnya tanggal 28 April 2022 si perempuan berkerudung tersebutlah yang dipilih untuk menjadi rekan kerja Destra………. yaitu Wyvanny Della Hari demi hari dilalui Destra dan Wyvanny selama 2 tahun bersama secara profesional. Keadaan senang, sulit, jenuh, perdebatan dan diskusi kerja di kantor mereka lalui. Tanpa mereka sadari secara personal mereka ternyata sering bercerita tentang pengalamannya, permasalahan hidup, pandangan hidup dan saling menceritakan hayalan masa depan yang diimpikan membuat mereka semakin mengenal satu sama lain dan tak terasa ada rasa yang tumbuh diantara mereka."
    },
    cerita2: {
        title: "Keinginan untuk mengenal",
        desc: "Pada 26 Oktober 2023, Destra memutuskan memberanikan diri mengajak Wyvanny bercengkrama untuk saling mengenal lebih dalam satu sama lain, namun pada hari itu Destra melihat keragu-raguan di mata Wyvanny. Tanpa Destra sadari Wyvanny juga ingin mengenal Destra lebih jauh lagi tapi masalah yang Wyvanny hadapi saat itu membuatnya takut untuk menerima ajakan tersebut. Sore hari pada 01 April 2024 disaat libur lebaran terlintas nama Wyvanny dikepala Destra yang membuatnya menghubungi Wyvanny dan ternyata Destra datang diwaktu yang sangat tepat. Percakapan yang menenangkan dihari itu membuat Wyvanny berani untuk membuka kesempatan kepada Destra dan mengesampingkan ketakutan akan keadaan kedepannya.  Setibanya Wyvanny kembali dari kampung halamannya ditanggal 18 April 2024, Destra mengajak Wyvanny bertemu di sebuah restoran di tengah kota Jakarta pada jam pulang kantor, awalnya mereka berbincang dengan canggung namun seiring waktu berjalan mereka merasakan kenyamanan untuk saling membuka cerita tentang diri mereka masing-masing. Cerita keburukan, ketakutan dan masalah yang sedang dijalani mereka ungkap pada malam itu, namun hal itu bukannya membuat mereka pergi tapi menjadi awal keyakinan yang tumbuh diantara mereka."
    },
    cerita3: {
        title: "Keadaan memperkuat keyakinan",
        desc: "Setelah pertemuan itu berlangsung Destra dan Wyvanny semakin dekat secara pribadi melalui setiap bahagia dan suka bersama namun dibalik setiap kebahagiaan bersama terdapat kesulitan menimpa mereka yang membawa mereka untuk saling menguatkan satu sama lain. Dalam keadaan yang pelik mereka lalui tanpa mereka sadari membuat keyakinan dan kepercayaan mereka semakin kuat. Bagaimana sifat kepemimpinan dan bertanggung jawab Destra dapat ditangkap oleh Wyvanny dan bagaimana kesabaran dan dukungan Wyvanny yang dapat ditangkap oleh Destra. Badai yang telah mereka lalui itu menguatkan keyakinan mereka untuk memantapkan diri untuk bersama sehingga pada tanggal 19 Juli 2024 mereka menetapkan tanggal itu sebagai awal dari cerita perjuangan bersama mereka. Perasaan dan keyakinan mereka semakin kuat, namun jalan tidak selalu mulus pasti selalu ada hambatan yang datang menghadang. Yakin sudah pasti tapi rasa ragu tidak bisa dibohongi, Masjid Sunda Kelapa menjadi saksi sujud dan doa mereka kala itu ditanggal 22 Maret 2025 tepatnya malam bulan Ramadhan yang mereka harap malam itu adalah malam lailatul qadar. Allah menunjukkan kebesarannya kepada mereka dengan mengabulkan setiap doa yang mereka panjatkan dan dengan perjuangan bersama yang mereka lakukan mereka mampu memecahkan setiap keraguan yang ada."
    },
    cerita4: {
        title: "Kebahagiaan atas penerimaan",
        desc: "Yakin mereka menciptakan perencanaan demi perencanaan, pertimbangan demi pertimbangan dan keinginan demi keinginan. Kerja keras Destra lakukan dukungan Wyvanny berikan. Sampai waktu itu tiba, 19 Juli 2025 di lantai 46 The Plaza Office Tower sebuah cincin dan seikat bunga Destra berikan kepada Wyvanny sebagai bentuk keseriusan Destra kepada Wyvanny dan anggukan dengan senyum beserta tetesan air mata kebahagiaan diberikan Wyvanny sebagai bentuk ketulusan dan yakinnya Wyvanny kepada Destra. Mereka yakin semua rintangan dan hambatan akan mereka  hadapi dan lewati bersama. Perjuangan, perencanaan dan tujuan mereka semakin matang. Hingga hari itu tiba, 14 September 2025, bukan tentang ulang tahun Wyvanny kali ini tapi hari itu menjadi hari untuk membuktikan seberapa besar keseriusan mereka. Destra terbang melintasi pulau jawa menuju pulau Sumatera, bersama Wyvanny membawa harapan dan keberanian bersama mereka untuk meminta restu ibunda Wyvanny tercinta. Memperkenalkan Destra diawal menjadi tugas Wyvanny, namun selanjutnya menjadi tugas Destra bagaimana ia menyampaikan maksud dan tujuannya serta meminta restu dan doa ke ibunda tercinta Wyvanny. Rumah ke rumah Destra datangi untuk menyampaikan keinginan dan keyakinan Destra untuk bersama Wyvanny, hingga mereka akhirnya mendapatkan restu dan dukungan dari sanak keluarga Wyvanny. Wyvanny dan Destra menyadari bahwa hubungan diantara mereka tidak hanya menyatuka mereka sebagai insan namun juga membangun hubungan harmonis antara keluarga masing-masing. Pada tanggal 23 November 2025 pertemuan antar keluargapun terjadi, tidak bisa dipungkiri kemahiran Destra berbicara seketika redup dengan gugupnya pada acara pertemuan tersebut. Destra secara langsung didepan seluruh keluarga meminang Wyvanny untuk dijadikan sebagai istri, teman hidup dan pendamping dunia akhiratnya. “Ya, mami selaku ibunya Vanny merestuinya” itulah kalimat yang disampaikan Ibunda Wyvanny dan mampu menghangatkan hati serta menerbangkan kegelisahan selama ini yang bersarang di diri Wyvanny dan Destra. suka duka kalian berdua pas lagi bareng-bareng."
    },

};

function openStory(id) {
    const modal = document.getElementById("story-modal");
    const title = document.getElementById("modal-title");
    const desc = document.getElementById("modal-desc");

    // Masukin data teksnya
    title.innerText = storyData[id].title;
    desc.innerText = storyData[id].desc;

    // Reset posisi scroll modal ke atas setiap kali dibuka
    modal.scrollTop = 0; 

    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Kunci background
}

function closeStory() {
    const modal = document.getElementById("story-modal");
    modal.style.display = "none";

    // Balikin scroll body asal bukan lagi di halaman Hero (Cover)
    if (!document.body.classList.contains('locked')) {
        document.body.style.overflow = "auto";
    }
}

// Tutup modal kalau user klik di luar kotak
window.onclick = function (event) {
    const modal = document.getElementById("story-modal");
    if (event.target == modal) {
        closeStory();
    }
}
