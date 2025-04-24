##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 7
## DESERIALIZATION 1
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/383671fb-f96c-4f46-ade0-57973b9c4141)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/548975d6-c8c8-4e97-b1bb-3287d08d06bc)
### 3. Penjelasan Code
##### Program ini merupakan implementasi JSON deserialization dalam NodeJS yang membaca dan memproses data mahasiswa dari file JSON. Class `DataMahasiswa2211104072` dibuat khusus dengan method `ReadJSON()` yang bertugas membaca file `tp7_1_2211104072.json`, mengubahnya menjadi object JavaScript menggunakan `JSON.parse`, lalu menampilkan hasilnya dalam format teks yang rapi seperti "Nama [depan+belakang] dengan nim [nim] dari fakultas [fakultas]". File JSON telah dimodifikasi dengan data praktikan (nama dan NIM 2211104072) sebagai pengganti data contoh, sementara class secara otomatis menangani error jika proses pembacaan atau parsing gagal. Program ini demonstrasi sederhana bagaimana mengonversi data JSON statis menjadi object yang bisa dimanipulasi dalam JavaScript dengan output yang terstruktur.
# 
## DESERIALIZATION 2
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/a19ac77d-cdaa-4105-9a0a-bc34ca4dbb2d)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/7f5e6125-218d-4732-b825-55e1b58f43e5)
### 3. Penjelasan Code
##### Program ini membaca daftar mata kuliah dari file JSON dan menampilkannya dalam format yang rapi menggunakan NodeJS. Class `KuliahMahasiswa2211104072` dirancang khusus untuk menangani data mata kuliah yang diambil mahasiswa, dimana method `ReadJSON()`-nya melakukan tiga tugas utama: membaca file JSON, mengubah data text JSON menjadi object JavaScript yang bisa diproses, lalu menampilkan daftar mata kuliah secara berurutan dengan format "MK [nomor] [kode matkul] - [nama matkul]". File JSON asli sudah dimodifikasi dengan data aktual mata kuliah semester ini, menggantikan contoh kode dan nama matkul yang generic. Program ini juga dilengkapi penanganan error sederhana yang akan memberi tahu jika terjadi masalah saat membaca file atau mengkonversi data, sehingga lebih aman digunakan. Hasil akhirnya adalah tampilan terstruktur dari seluruh mata kuliah yang diambil, memudahkan praktikan untuk melihat daftar kuliahnya secara lengkap dan rapi.
