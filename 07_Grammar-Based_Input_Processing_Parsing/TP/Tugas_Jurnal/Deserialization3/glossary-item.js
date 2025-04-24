const fs = require('fs');

// Path ke file JSON
const filePath = './jurnal7_3_2211104072.json';

// Kelas dengan nama sesuai NIM praktikan
class GlossaryItem2211104072 {
    constructor(filePath) {
        this.filePath = filePath;
    }

    ReadJSON() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const jsonObj = JSON.parse(data);
            const glossEntry = jsonObj.glossary.GlossDiv.GlossList.GlossEntry;

            console.log("=== Glossary Entry ===");
            console.log(`ID           : ${glossEntry.ID}`);
            console.log(`Sort As      : ${glossEntry.SortAs}`);
            console.log(`Gloss Term   : ${glossEntry.GlossTerm}`);
            console.log(`Acronym      : ${glossEntry.Acronym}`);
            console.log(`Abbreviation : ${glossEntry.Abbrev}`);
            console.log("Definition   :");
            console.log(`  - ${glossEntry.GlossDef.para}`);
            console.log("  - See Also : " + glossEntry.GlossDef.GlossSeeAlso.join(", "));
            console.log(`See          : ${glossEntry.GlossSee}`);
        } catch (err) {
            console.error("Gagal membaca atau parsing file JSON:", err);
        }
    }
}

// Inisialisasi dan jalankan
const glossaryItem = new GlossaryItem2211104072(filePath);
glossaryItem.ReadJSON();