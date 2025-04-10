class SayaTubeVideo {
    constructor(title) {
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    increasePlayCount(count) {
        this.playCount += count;
    }

    printVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.username = username;
        this.uploadedVideos = [];
    }

    getTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    addVideo(video) {
        this.uploadedVideos.push(video);
    }

    printAllVideoPlaycount() {
        console.log(`User: ${this.username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

function main() {
    const namaPraktikan = "John Doe";

    const user = new SayaTubeUser(namaPraktikan);

    const films = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Dark Knight",
        "Pulp Fiction",
        "Fight Club",
        "Inception",
        "The Matrix",
        "Goodfellas",
        "The Silence of the Lambs",
        "Interstellar"
    ];

    films.forEach(film => {
        const judulVideo = `Review Film ${film} oleh ${namaPraktikan}`;
        const video = new SayaTubeVideo(judulVideo);

        const randomPlayCount = Math.floor(Math.random() * 1000000) + 1000;
        video.increasePlayCount(randomPlayCount);

        user.addVideo(video);
    });

    user.printAllVideoPlaycount();

    console.log(`\nTotal Play Count: ${user.getTotalVideoPlayCount().toLocaleString()}`);

    console.log("\nContoh detail video:");
    user.uploadedVideos[0].printVideoDetails();
}

main();