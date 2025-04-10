class SimpleDataBase {
    constructor() {
        this.storedData = [];
        this.inputDates = [];
    }

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    PrintAllData() {
        console.log("Isi database:");
        for (let i = 0; i < this.storedData.length; i++) {
            const data = this.storedData[i];
            const date = this.inputDates[i];
            console.log(`• Data ${i+1} berisi: ${data}, yang disimpan pada waktu UTC: ${date.toUTCString()}`);
        }
    }
}


function main() {
    const db = new SimpleDataBase();

    const data1 = "12";
    const data2 = "34";
    const data3 = "56";

    db.AddNewData(data1);
    db.AddNewData(data2);
    db.AddNewData(data3);

    db.PrintAllData();
}

main();