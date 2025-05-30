function cariTandaBilangan(a) {
    if (a < 0) {
        return "Negatif";
    } else if (a > 0) {
        return "Positif";
    } else {
        return "Nol";
    }
}

function cekTanda() {
    const input = parseInt(document.getElementById("inputBilangan").value);
    const hasil = cariTandaBilangan(input);
    document.getElementById("outputLabel").textContent = `Hasil: ${hasil}`;
}

// Export fungsi untuk unit test
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cariTandaBilangan };
}