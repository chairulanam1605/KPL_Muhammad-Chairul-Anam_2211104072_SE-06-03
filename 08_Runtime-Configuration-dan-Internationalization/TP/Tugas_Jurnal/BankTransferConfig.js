const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

class BankTransferConfig {
    constructor() {
        this.config = null;
        this.loadConfig();
    }

    loadConfig() {
        try {
            const rawData = fs.readFileSync('bank_transfer_config.json');
            this.config = JSON.parse(rawData);
        } catch (error) {
            console.error('Error loading configuration:', error);
            process.exit(1);
        }
    }

    async runTransferProcess() {
        // i. Prompt amount based on language
        const amountPrompt = this.config.lang === 'en' ?
            'Please insert the amount of money to transfer:' :
            'Masukkan jumlah uang yang akan di-transfer:';

        const amount = await this.getInput(amountPrompt);

        // ii. Calculate and display fee and total amount
        const transferAmount = parseInt(amount);
        const threshold = parseInt(this.config.transfer.threshold);
        const fee = transferAmount <= threshold ?
            parseInt(this.config.transfer.low_fee) :
            parseInt(this.config.transfer.high_fee);

        const total = transferAmount + fee;

        if (this.config.lang === 'en') {
            console.log(`Transfer fee = ${fee}`);
            console.log(`Total amount = ${total}`);
        } else {
            console.log(`Biaya transfer = ${fee}`);
            console.log(`Total biaya = ${total}`);
        }

        // iii. Prompt transfer method based on language
        const methodPrompt = this.config.lang === 'en' ?
            'Select transfer method:' :
            'Pilih metode transfer:';
        console.log(methodPrompt);

        // iv. Display available methods with numbering
        this.config.methods.forEach((method, index) => {
            console.log(`${index + 1}. ${method}`);
        });

        const methodIndex = await this.getInput('') - 1;
        const selectedMethod = this.config.methods[methodIndex];

        // v. Confirmation prompt
        const confirmationWord = this.config.lang === 'en' ?
            this.config.confirmation.en :
            this.config.confirmation.id;

        const confirmationPrompt = this.config.lang === 'en' ?
            `Please type "${confirmationWord}" to confirm the transaction:` :
            `Ketik "${confirmationWord}" untuk mengkonfirmasi transaksi:`;

        const confirmation = await this.getInput(confirmationPrompt);

        // vi & vii. Check confirmation and display result
        if (confirmation === confirmationWord) {
            console.log(this.config.lang === 'en' ?
                'The transfer is completed' :
                'Proses transfer berhasil');
        } else {
            console.log(this.config.lang === 'en' ?
                'Transfer is cancelled' :
                'Transfer dibatalkan');
        }

        readline.close();
    }

    getInput(prompt) {
        return new Promise(resolve => {
            readline.question(prompt, input => {
                resolve(input);
            });
        });
    }
}

// Run the program
const bankTransfer = new BankTransferConfig();
bankTransfer.runTransferProcess();