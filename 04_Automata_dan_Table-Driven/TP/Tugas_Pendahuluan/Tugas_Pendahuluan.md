##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 3
### A. Kode Pos
#### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/6829255a-9d3a-4e8b-be35-f63706711d57)
#### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/508986d7-cac5-4cf0-ba49-f1d5bf440de4)
#### 3. Penjelasan Code
##### Kode di atas mengimplementasikan teknik table-driven dalam Node.js untuk mengelola kode pos berdasarkan nama kelurahan. Class KodePos dibuat dengan sebuah tabel data (kodePosTable) yang menyimpan pasangan nama kelurahan dan kode pos. Method getKodePos digunakan untuk mengambil kode pos berdasarkan input kelurahan. Jika kelurahan tidak ditemukan, method mengembalikan pesan "Kode pos tidak ditemukan". Pada fungsi main, instance dari class KodePos dibuat dan method getKodePos diuji dengan beberapa contoh kelurahan. Pendekatan ini membuat kode lebih terstruktur, mudah dibaca, dan dapat dikembangkan dengan mudah.

### B. Door Machine
#### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/cf2b7490-e522-4d40-a604-f99518fcc491)
#### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/ac93a586-cb63-49c4-ac29-c579c00761b7)
#### 3. Penjelasan Code
##### Kode di atas mengimplementasikan class DoorMachine dalam Node.js menggunakan teknik state-based construction. State awal pintu adalah Terkunci. Method changeState menerima aksi (BukaPintu atau KuncIPintu) untuk mengubah state dan menampilkan pesan sesuai perubahan state. Jika state tidak berubah, pesan state saat ini ditampilkan. Pada fungsi main, instance DoorMachine dibuat dan perubahan state disimulasikan, menampilkan pesan di console untuk setiap perubahan. Pendekatan ini membuat logika state terpusat dan mudah dikelola.