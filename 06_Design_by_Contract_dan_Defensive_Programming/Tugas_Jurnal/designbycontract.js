class SayaTubeVideo {
    constructor(title) {
        try {

            if (!title) throw "Judul video tidak boleh null";
            if (title.length > 200) throw "Judul video maksimal 200 karakter";

            this.id = Math.floor(10000 + Math.random() * 90000);
            this.title = title;
            this.playCount = 0;
        } catch (err) {
            console.error(`Error membuat video: ${err}`);
            throw err;
        }
    }


    increasePlayCount(count) {
        try {
            if (count > 25000000) throw "Penambahan play count maksimal 25.000.000";
            if (count < 0) throw "Play count tidak boleh negatif";
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) throw "Play count akan overflow";

            this.playCount += count;
        } catch (err) {
            console.error(`Error menambah play count: ${err}`);
        }
    }

    printVideoDetails() {
        console.log(`Video Details:
ID: ${this.id}
Title: ${this.title}
Play Count: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        try {
            if (!username) throw "Username tidak boleh null";
            if (username.length > 100) throw "Username maksimal 100 karakter";

            this.id = Math.floor(10000 + Math.random() * 90000);
            this.username = username;
            this.uploadedVideos = [];
        } catch (err) {
            console.error(`Error membuat user: ${err}`);
            throw err;
        }
    }

    addVideo(video) {
        try {
            if (!video) throw "Video tidak boleh null";
            if (video.playCount >= Number.MAX_SAFE_INTEGER) throw "Video play count sudah maksimum";

            this.uploadedVideos.push(video);
        } catch (err) {
            console.error(`Error menambah video: ${err}`);
        }
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    printAllVideoPlaycount() {
        try {
            console.log(`User: ${this.username}`);

            const videosToShow = this.uploadedVideos.slice(0, 8);

            videosToShow.forEach((video, index) => {
                console.log(`Video ${index + 1} judul: ${video.title}`);
            });
        } catch (err) {
            console.error(`Error menampilkan video: ${err}`);
        }
    }
}

function testDesignByContract() {
    try {
        const invalidUser = new SayaTubeUser(null);
    } catch {}

    try {
        const longNameUser = new SayaTubeUser("A".repeat(101));
    } catch {}

    try {
        const invalidVideo = new SayaTubeVideo(null);
    } catch {}

    try {
        const longTitleVideo = new SayaTubeVideo("B".repeat(201));
    } catch {}

    const user = new SayaTubeUser("Alice");
    const video1 = new SayaTubeVideo("Review Film A");

    video1.increasePlayCount(-100);
    video1.increasePlayCount(25000001);

    for (let i = 0; i < 10; i++) {
        video1.increasePlayCount(Number.MAX_SAFE_INTEGER / 5);
    }

    for (let i = 1; i <= 10; i++) {
        const video = new SayaTubeVideo(`Review Film ${i}`);
        user.addVideo(video);
    }
    user.printAllVideoPlaycount();

    user.addVideo(null);
}

testDesignByContract();