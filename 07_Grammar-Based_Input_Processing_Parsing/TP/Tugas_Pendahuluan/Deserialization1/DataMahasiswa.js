const fs = require('fs');

class DataMahasiswa2211104072 {
    constructor() {
        this.data = null;
    }

    ReadJSON() {
        try {
            // Membaca file JSON
            const rawData = fs.readFileSync('tp7_1_2211104072.json');

            // Parsing JSON menjadi object
            this.data = JSON.parse(rawData);

            // Menampilkan hasil deserialisasi
            console.log(`Nama ${this.data.nama.depan} ${this.data.nama.belakang} dengan nim ${this.data.nim} dari fakultas ${this.data.fakultas}`);

            return this.data;
        } catch (error) {
            console.error('Error reading or parsing JSON file:', error);
            return null;
        }
    }
}

// Contoh penggunaan
const dataMahasiswa = new DataMahasiswa2211104072();
dataMahasiswa.ReadJSON();