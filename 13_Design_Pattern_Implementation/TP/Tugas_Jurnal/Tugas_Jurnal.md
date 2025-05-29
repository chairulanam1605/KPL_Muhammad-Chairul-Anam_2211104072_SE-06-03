##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Jurnal Modul 13
## Design Pattern
### 1. Menjelaskan Design Pattern Singleton

#### Dua Contoh Kondisi di Mana Design Pattern “Singleton” Dapat Digunakan
- Sistem Logging (Pencatatan Log):

Dalam aplikasi besar, sering kali dibutuhkan satu titik pusat untuk mencatat log agar konsisten dan mudah dikelola. Dengan menggunakan Singleton, kita memastikan hanya ada satu instance logger yang digunakan di seluruh aplikasi.

- Manajemen Koneksi Basis Data:

Untuk menghindari pemborosan sumber daya dan potensi konflik, aplikasi sering menggunakan satu instance koneksi ke basis data yang dibagikan ke seluruh bagian aplikasi. Singleton memastikan hanya satu koneksi yang digunakan secara global.

#### Langkah-Langkah Mengimplementasikan Design Pattern “Singleton”
- Membuat Konstruktor Privat:

Hal ini mencegah pembuatan objek dari luar kelas, sehingga hanya kelas itu sendiri yang dapat menginisialisasi instance-nya.

- Mendeklarasikan Variabel Statis Privat:

Variabel ini akan menyimpan satu-satunya instance dari kelas tersebut.

- Menyediakan Metode Statis (misalnya getInstance()):

Metode ini akan mengembalikan instance yang sudah ada atau membuatnya jika belum ada.

- Menambahkan Mekanisme Sinkronisasi (Opsional):

Dalam lingkungan multithreaded, perlu memastikan bahwa hanya satu thread yang dapat membuat instance pada saat bersamaan untuk menghindari pembuatan multiple instance.

#### Tiga Kelebihan dan Kekurangan dari Design Pattern “Singleton”
##### Kelebihan:

- Kontrol Akses Terpusat:

Memastikan hanya ada satu instance yang digunakan di seluruh aplikasi, sehingga memudahkan pengelolaan sumber daya bersama.

- Penghematan Sumber Daya:

Menghindari pembuatan multiple instance yang tidak perlu, terutama untuk objek yang berat seperti koneksi basis data atau logger.

- Implementasi Mudah:

Konsep dan implementasinya relatif sederhana dan langsung, cocok untuk kebutuhan tertentu.

##### Kekurangan:

- Sulit untuk Pengujian Unit (Unit Testing):

Karena instance bersifat global, sulit untuk menggantinya dengan mock atau stub dalam pengujian.

- Masalah dalam Lingkungan Multithreaded:

Jika tidak diimplementasikan dengan benar, bisa terjadi race condition yang menyebabkan pembuatan multiple instance.

- Pelanggaran Prinsip Single Responsibility:

Kelas Singleton bertanggung jawab atas pembuatan instance dan juga logika bisnisnya, yang bisa membuatnya terlalu kompleks dan sulit untuk dimodifikasi atau diperluas.
### 2. ScreenShoot Code
#### a. Main.java
![Image](https://github.com/user-attachments/assets/6b2f6b94-73de-4ccd-8b7f-d788a7983ca2)
#### b. PusatDataSingleton.java
![Image](https://github.com/user-attachments/assets/f6ac5694-00bb-4976-aee9-959bbb227167)
![Image](https://github.com/user-attachments/assets/f296dd40-e80b-4089-990f-9876dd26b6fb)
### 3. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/da9cb90a-b08b-4799-948a-1bd1b3fa0b5d)
### 4. Penjelasan Code
##### Program ini merupakan implementasi design pattern Singleton dalam bahasa Java yang bertujuan untuk memastikan bahwa hanya terdapat satu objek dari class PusatDataSingleton selama program berjalan. Class ini menyimpan data dalam bentuk list string yang dapat diakses dan dimodifikasi dari berbagai bagian program. Objek Singleton dikelola melalui method getDataSingleton() yang mengembalikan instance tunggal dari class tersebut, atau membuatnya terlebih dahulu jika belum ada. Terdapat beberapa method tambahan seperti addSebuahData() untuk menambahkan data ke dalam list, hapusSebuahData() untuk menghapus data berdasarkan indeks tertentu, getSemuaData() untuk mengambil seluruh data dalam bentuk list, serta printSemuaData() untuk mencetak seluruh isi list ke console. Di bagian fungsi utama (main), dua variabel data1 dan data2 dideklarasikan dan keduanya mengacu ke instance yang sama dari PusatDataSingleton. Melalui data1, ditambahkan beberapa nama anggota kelompok dan asisten praktikum, kemudian data yang sama ditampilkan kembali melalui data2 untuk menunjukkan bahwa perubahan data bersifat global dan konsisten. Setelah menghapus salah satu data menggunakan data2, hasilnya langsung tercermin juga pada data1, mempertegas bahwa objek yang digunakan memang satu-satunya instance yang sama. Implementasi ini menunjukkan pemanfaatan prinsip Singleton secara efektif untuk pengelolaan data terpusat dalam satu aplikasi.
# 
