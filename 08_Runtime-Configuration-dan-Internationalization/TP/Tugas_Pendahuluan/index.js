const readline = require('readline');
const CovidConfig = require('./covid_config');

// Membuat interface untuk input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const covidConfig = new CovidConfig();

// Fungsi untuk meminta input dari user
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Fungsi utama
async function main() {
    try {
        // Mengubah satuan suhu (sesuai permintaan soal)
        const satuanBaru = covidConfig.ubahSatuan();
        console.log(`Satuan suhu telah diubah menjadi: ${satuanBaru}`);

        const satuanSuhu = covidConfig.getSatuanSuhu();
        const batasHariDeman = covidConfig.getBatasHariDeman();

        // Meminta input dari user
        const suhu = await askQuestion(`Berapa suhu badan anda saat ini? Dalam nilai ${satuanSuhu}: `);
        const hariDeman = await askQuestion('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? ');

        // Konversi ke number
        const suhuNumber = parseFloat(suhu);
        const hariDemanNumber = parseInt(hariDeman);

        // Validasi input
        if (isNaN(suhuNumber) || isNaN(hariDemanNumber)) {
            console.log('Input tidak valid. Harap masukkan angka.');
            rl.close();
            return;
        }

        // Mengecek kondisi
        let suhuNormal = false;
        if (satuanSuhu.toLowerCase() === 'celcius') {
            suhuNormal = suhuNumber >= 36.5 && suhuNumber <= 37.5;
        } else if (satuanSuhu.toLowerCase() === 'fahrenheit') {
            suhuNormal = suhuNumber >= 97.7 && suhuNumber <= 99.5;
        }

        const hariDemanValid = hariDemanNumber < batasHariDeman;

        // Menampilkan hasil
        if (suhuNormal && hariDemanValid) {
            console.log(covidConfig.getPesanDiterima());
        } else {
            console.log(covidConfig.getPesanDitolak());
        }

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    } finally {
        rl.close();
    }
}

// Menjalankan program utama
main();