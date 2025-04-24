const fs = require('fs');

// Nama file JSON
const filePath = './jurnal7_2_2211104072.json';

// Kelas dengan nama sesuai NIM praktikan
class TeamMembers2211104072 {
    constructor(filePath) {
        this.filePath = filePath;
    }

    ReadJSON() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            const obj = JSON.parse(data);

            console.log("Team member list:");
            obj.members.forEach(member => {
                const fullName = `${member.firstName} ${member.lastName}`;
                console.log(`${member.nim} ${fullName} (${member.age} ${member.gender})`);
            });
        } catch (err) {
            console.error("Gagal membaca atau parsing file JSON:", err);
        }
    }
}

// Inisialisasi objek dan panggil method
const team = new TeamMembers2211104072(filePath);
team.ReadJSON();