class KodePos {
    constructor() {
        this.kodePosTable = {
            "Batununggal": "40266",
            "Kujangsari": "40287",
            "Mengger": "40267",
            "Wates": "40256",
            "Cijaura": "40287",
            "Jatisari": "40286",
            "Margasari": "40286",
            "Sekejati": "40286",
            "Kebonwaru": "40272",
            "Maleer": "40274",
            "Samoja": "40273"
        };
    }

    getKodePos(kelurahan) {
        return this.kodePosTable[kelurahan] || "Kode pos tidak ditemukan";
    }
}

// Main class
function main() {
    const kodePos = new KodePos();

    // Contoh pemanggilan method getKodePos
    console.log(kodePos.getKodePos("Batununggal")); // Output: 40266
    console.log(kodePos.getKodePos("Kujangsari")); // Output: 40287
    console.log(kodePos.getKodePos("TidakAda")); // Output: Kode pos tidak ditemukan
}

// Panggil main function
main();