const fs = require('fs');

class KuliahMahasiswa2211104072 {
    constructor() {
        this.courses = [];
    }

    ReadJSON() {
        try {
            // Membaca file JSON
            const rawData = fs.readFileSync('tp7_2_2211104072.json');

            // Parsing JSON menjadi object
            const data = JSON.parse(rawData);
            this.courses = data.courses;

            // Menampilkan hasil deserialisasi
            console.log("Daftar mata kuliah yang diambil:");
            this.courses.forEach((course, index) => {
                console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
            });

            return this.courses;
        } catch (error) {
            console.error('Error reading or parsing JSON file:', error);
            return [];
        }
    }
}

// Contoh penggunaan
const kuliahMahasiswa = new KuliahMahasiswa2211104072();
kuliahMahasiswa.ReadJSON();