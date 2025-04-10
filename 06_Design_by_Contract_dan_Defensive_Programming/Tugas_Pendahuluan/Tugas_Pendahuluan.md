##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 6
## Saya Tube Video
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/397debc4-e7fc-4a74-b940-a252f5c35778)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/003535bd-4d42-4fbc-b566-c38e78c63cb5)
### 3. Penjelasan Code
##### Kode ini membuat sebuah class `SayaTubeVideo` yang merepresentasikan video dengan properti ID (acak 5 digit), judul, dan jumlah play count, di mana constructor-nya menginisialisasi nilai default, method `increasePlayCount` menambah jumlah play count, dan method `printVideoDetails` menampilkan detail video. Fungsi `main()` membuat instance video dengan judul "Tutorial Design By Contract – Muhammad Chairul Anam", menambahkan 1000 play count, lalu menampilkan detail video tersebut yang berisi ID, judul, dan total play count. Program ini merupakan implementasi sederhana sistem manajemen video dengan fitur dasar penyimpanan data dan penambahan jumlah tayangan.
# 
## Implementasi Design by Contract
### 1. ScreenShoot Code
![Image](https://github.com/user-attachments/assets/ad9600ee-5033-4b93-906a-6ef3259699e3)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/718a0eb7-f691-4e60-a715-ba9ade627f6e)
### 3. Penjelasan Code
##### Kode ini mengimplementasikan sistem manajemen video dengan validasi ketat menggunakan konsep *Design by Contract*, di mana class `SayaTubeVideo` memiliki validasi pada constructor untuk memastikan judul video tidak null dan tidak melebihi 100 karakter, serta validasi pada method `increasePlayCount` yang membatasi penambahan play count maksimal 10 juta per panggilan, tidak boleh negatif, dan mencegah overflow integer. Fungsi `main()` melakukan berbagai pengujian termasuk pembuatan video dengan judul null, judul terlalu panjang, penambahan play count melebihi batas, dan simulasi overflow dengan loop, di mana semua error ditangkap dengan try-catch untuk menjaga program tetap berjalan sambil menampilkan pesan error yang informatif, dan diakhiri dengan contoh penggunaan normal yang menambahkan 1000 play count dan menampilkan detail video. Program ini menunjukkan praktik terbaik dalam penanganan error dan validasi input dalam pengembangan perangkat lunak.