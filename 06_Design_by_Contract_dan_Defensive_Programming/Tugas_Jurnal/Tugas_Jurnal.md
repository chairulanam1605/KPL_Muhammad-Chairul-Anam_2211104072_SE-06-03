##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Jurnal Modul 6
## Saya Tube Video
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/250f2d6f-09db-4da7-a1f8-5a1f6141d98d)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/7cff2f89-bc34-4695-85cb-3b6794c15bd2)
### 3. Penjelasan Code
##### Kode ini membuat sistem sederhana untuk mengelola video dan pengguna di platform, di mana class `SayaTubeVideo` merepresentasikan video dengan properti ID, judul, dan jumlah tayangan, serta method untuk menambah tayangan dan menampilkan detail, sedangkan class `SayaTubeUser` merepresentasikan pengguna dengan properti ID, username, dan daftar video yang diunggah, dilengkapi method untuk menghitung total tayangan semua video, menambah video baru, dan menampilkan daftar video. Fungsi `main()` membuat pengguna dengan nama "John Doe", membuat 10 video review film dengan judul khusus dan jumlah tayangan acak, kemudian menampilkan daftar video pengguna beserta total tayangan dan contoh detail satu video pertama.
# 
## Implementasi Design by Contract
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/3d06f8d9-e654-42ec-a0bc-2b2b3edf734f)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/60d6beda-a0f2-4aa9-bfe6-7cd857316b83)
### 3. Penjelasan Code
##### Kode ini mengimplementasikan sistem manajemen video dengan *Design by Contract* yang terdiri dari dua class utama: `SayaTubeVideo` untuk merepresentasikan video dengan validasi judul (tidak null dan maksimal 200 karakter) serta pengecekan penambahan play count (tidak negatif, maksimal 25 juta, dan cek overflow), dan `SayaTubeUser` untuk pengguna dengan validasi username (tidak null dan maksimal 100 karakter) serta pengecekan saat menambahkan video (tidak null dan cek play count maksimum). Fungsi `testDesignByContract()` secara khusus menguji berbagai skenario error seperti input null, panjang karakter berlebihan, penambahan play count invalid, dan overflow, sambil menampilkan daftar video terbatas (8 video pertama) untuk menghindari output yang terlalu panjang, dengan semua error ditangkap menggunakan try-catch untuk menjaga aplikasi tetap berjalan meskipun terjadi exception.