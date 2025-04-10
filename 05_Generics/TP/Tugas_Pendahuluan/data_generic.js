class DataGeneric {
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

function main() {
    const nim = "123456789";
    const dataNIM = new DataGeneric(nim);
    dataNIM.PrintData();
}

main();