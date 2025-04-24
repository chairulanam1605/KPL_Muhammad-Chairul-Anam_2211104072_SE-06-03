const fs = require('fs');

// Ganti dengan path file JSON kamu
const filePath = './jurnal7_1_2211104072.json';

class DataMahasiswa2211104072 {
    constructor(filePath) {
        this.filePath = filePath;
    }

    ReadJSON() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const obj = JSON.parse(data);

            console.log("=== Data Mahasiswa ===");
            console.log(`Nama Lengkap : ${obj.firstName} ${obj.lastName}`);
            console.log(`Jenis Kelamin: ${obj.gender}`);
            console.log(`Umur         : ${obj.age}`);
            console.log("Alamat:");
            console.log(`  Jalan      : ${obj.address.streetAddress}`);
            console.log(`  Kota       : ${obj.address.city}`);
            console.log(`  Provinsi   : ${obj.address.state}`);
            console.log("Mata Kuliah:");
            obj.courses.forEach((course, index) => {
                console.log(`  ${index + 1}. ${course.code} - ${course.name}`);
            });
        } catch (err) {
            console.error("Gagal membaca atau parsing file JSON:", err);
        }
    }
}

// Inisialisasi dan jalankan
const mahasiswa = new DataMahasiswa2211104072(filePath);
mahasiswa.ReadJSON();