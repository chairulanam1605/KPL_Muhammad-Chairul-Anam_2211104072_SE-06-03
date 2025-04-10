class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
        const numA = Number(a);
        const numB = Number(b);
        const numC = Number(c);

        const hasil = numA + numB + numC;

        return hasil;
    }
}

function main() {
    const penjumlahan = new Penjumlahan();

    const angka1 = "12";
    const angka2 = "34";
    const angka3 = "56";

    const a = parseInt(angka1);
    const b = parseInt(angka2);
    const c = parseInt(angka3);

    const hasil = penjumlahan.JumlahTigaAngka(a, b, c);

    console.log(`Hasil penjumlahan ${a} + ${b} + ${c} = ${hasil}`);
}

main();