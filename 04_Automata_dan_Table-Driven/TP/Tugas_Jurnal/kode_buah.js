class KodeBuah {
    constructor() {
        this.kodeBuahTable = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Blackberry": "F00",
            "Ceri": "H00",
            "Kelapa": "I00",
            "Jagung": "J00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.kodeBuahTable[namaBuah] || "Kode buah tidak ditemukan";
    }
}

// Main function
function main() {
    const kodeBuah = new KodeBuah();

    // Contoh pemanggilan method getKodeBuah
    console.log(kodeBuah.getKodeBuah("Apel")); // Output: A00
    console.log(kodeBuah.getKodeBuah("Durian")); // Output: L00
    console.log(kodeBuah.getKodeBuah("Mangga")); // Output: Kode buah tidak ditemukan
}

// Panggil main function
main();