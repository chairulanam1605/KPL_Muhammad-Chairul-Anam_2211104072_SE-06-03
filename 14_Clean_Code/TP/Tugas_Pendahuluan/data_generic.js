// Class generik untuk menyimpan dan menampilkan data
class DataGeneric {
    constructor(storedData) {
        this.storedData = storedData;
    }

    // Method untuk mencetak data yang disimpan
    printData() {
        console.log(`Data yang tersimpan adalah: ${this.storedData}`);
    }
}

// Fungsi utama untuk menjalankan program
function main() {
    const studentId = "2211104072";
    const studentData = new DataGeneric(studentId);
    studentData.printData();
}

// Menjalankan fungsi utama
main();