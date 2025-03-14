class DoorMachine {
    constructor() {
        this.state = 'Terkunci'; // State awal
    }

    // Method untuk mengubah state
    changeState(action) {
        if (action === 'BukaPintu' && this.state === 'Terkunci') {
            this.state = 'Terbuka';
            console.log('Pintu tidak terkunci');
        } else if (action === 'KuncIPintu' && this.state === 'Terbuka') {
            this.state = 'Terkunci';
            console.log('Pintu terkunci');
        } else {
            console.log(`Pintu sudah dalam state: ${this.state}`);
        }
    }
}

// Main function untuk mensimulasikan perubahan state
function main() {
    const door = new DoorMachine();

    // Simulasi perubahan state sesuai dengan urutan pada gambar
    door.changeState('BukaPintu'); // Pintu tidak terkunci
    door.changeState('Terkunci'); // Pintu terkunci
    door.changeState('BukaPintu'); // Pintu tidak terkunci
    door.changeState('BukaPintu'); // Pintu sudah dalam state: Terbuka
    door.changeState('KuncIPintu'); // Pintu terkunci
    door.changeState('KuncIPintu'); // Pintu sudah dalam state: Terkunci
}

// Panggil main function
main();