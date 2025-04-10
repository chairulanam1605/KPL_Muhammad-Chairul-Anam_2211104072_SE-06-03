##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Jurnal Modul 5
## Penjumlahan
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/0405f382-9fb8-44cc-9b32-83c6a25b7a92)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/883a1628-ab6c-4e64-b36e-95d47a443f91)
### 3. Penjelasan Code
##### Kode di atas mendefinisikan class Penjumlahan dengan method JumlahTigaAngka yang menerima tiga parameter (a, b, c) dan mengembalikan hasil penjumlahannya setelah mengkonversi parameter ke tipe number. Fungsi main() membuat instance dari class tersebut, mendefinisikan tiga variabel string (angka1, angka2, angka3) yang dikonversi ke integer menggunakan parseInt, kemudian memanggil method JumlahTigaAngka untuk menghitung dan menampilkan hasil penjumlahan dari ketiga angka tersebut (12 + 34 + 56 = 102) melalui console.log
# 
## Simple Database
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/8452cb9c-1dab-4e08-9d8d-ed9579ca1f06)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/6eb1a616-2a94-40ee-a542-141443e73adf)
### 3. Penjelasan Code
##### Kode di atas membuat class `SimpleDataBase` yang berfungsi sebagai database sederhana untuk menyimpan data beserta waktu penyimpanannya, di mana constructor menginisialisasi dua array (`storedData` untuk menyimpan data dan `inputDates` untuk menyimpan tanggal), method `AddNewData` menambahkan data baru beserta waktu saat itu ke dalam array, dan method `PrintAllData` menampilkan seluruh data beserta waktu penyimpanannya dalam format UTC. Fungsi `main()` membuat instance database, menambahkan tiga data string ("12", "34", "56"), lalu mencetak semua data yang tersimpan beserta timestamp-nya.