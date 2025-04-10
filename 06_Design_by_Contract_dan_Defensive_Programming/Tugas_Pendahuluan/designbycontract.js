class SayaTubeVideo {
    constructor(title) {
        if (title === null || title === undefined) {
            throw new Error("Judul video tidak boleh null");
        }
        if (title.length > 100) {
            throw new Error("Judul video maksimal 100 karakter");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        try {

            if (count > 10000000) {
                throw new Error("Penambahan play count maksimal 10.000.000 per panggilan");
            }
            if (count < 0) {
                throw new Error("Penambahan play count tidak boleh negatif");
            }

            const newPlayCount = this.playCount + count;
            if (newPlayCount > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count akan melebihi batas maksimal integer");
            }

            this.playCount = newPlayCount;
        } catch (error) {
            console.error(`Error saat menambah play count: ${error.message}`);
        }
    }

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

function main() {
    try {
        const nama = "Muhammad Chairul Anam";

        try {
            const videoNull = new SayaTubeVideo(null);
        } catch (error) {
            console.error(`Test judul null: ${error.message}`);
        }

        try {
            const longTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.";
            const videoLongTitle = new SayaTubeVideo(longTitle);
        } catch (error) {
            console.error(`Test judul panjang: ${error.message}`);
        }

        const video = new SayaTubeVideo(`Tutorial Design By Contract – ${nama}`);

        video.increasePlayCount(10000001);

        try {
            console.log("\nMemulai test overflow...");
            for (let i = 0; i < 100; i++) {
                video.increasePlayCount(Number.MAX_SAFE_INTEGER / 10);
                console.log(`Iterasi ${i+1}: Play count = ${video.playCount}`);
            }
        } catch (error) {
            console.error(`Test overflow: ${error.message}`);
        }

        video.increasePlayCount(1000);
        video.printVideoDetails();

    } catch (error) {
        console.error(`Error utama: ${error.message}`);
    }
}

main();