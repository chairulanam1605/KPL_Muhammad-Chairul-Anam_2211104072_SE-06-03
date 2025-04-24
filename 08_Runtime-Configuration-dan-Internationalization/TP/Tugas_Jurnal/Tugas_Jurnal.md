##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 8
## RUNTIME CONFIGURATION
### 1. ScreenShoot Code
#### a. BankTransferConfig.js
![Image](https://github.com/user-attachments/assets/24eea117-5437-4ba0-801f-090bfc519472)
![Image](https://github.com/user-attachments/assets/1866be7b-d64b-410e-a8cd-da5a26cf848e)
![Image](https://github.com/user-attachments/assets/7199e4e9-8739-4e88-878f-ddcefe9e28dc)
#### b. bank_transfer_config.json default
![Image](https://github.com/user-attachments/assets/097e1ea7-8861-4b3e-b79a-1e7aae221a46)
#### c. bank_transfer_config.json update
![Image](https://github.com/user-attachments/assets/44b42c17-66e2-4bea-97f1-31d487109579)
### 2. ScreenShoot Output
#### a. Sebelum di rubah file json(default)
![Image](https://github.com/user-attachments/assets/097e1ea7-8861-4b3e-b79a-1e7aae221a46)
#### b. sesudah dirubah file json (update)
![Image](https://github.com/user-attachments/assets/8a62f6eb-cea0-4789-ae13-b2fbd616e25e)
### 3. Penjelasan Code
##### Program ini mengimplementasikan sistem konfigurasi transfer bank berbasis NodeJS yang secara dinamis menyesuaikan perilaku aplikasi berdasarkan file konfigurasi JSON. Class `BankTransferConfig` bertugas memuat pengaturan seperti bahasa (Inggris/Indonesia), nominal threshold transfer, biaya rendah/tinggi, metode transfer, dan kata konfirmasi dari file JSON. Saat dijalankan, program akan berinteraksi dengan pengguna melalui console dengan menyesuaikan bahasa tampilan, menghitung biaya transfer otomatis berdasarkan nominal yang dimasukkan (dengan membandingkan terhadap threshold), menampilkan daftar metode transfer bernomor, serta memverifikasi konfirmasi transaksi sesuai kata kunci yang telah dikonfigurasi. Seluruh alur kerja aplikasi - mulai dari teks prompt, perhitungan biaya, hingga pesan konfirmasi - sepenuhnya dikendalikan oleh file konfigurasi eksternal, membuatnya fleksibel dan mudah diadaptasi tanpa perlu mengubah kode program. Program ini juga dilengkapi dengan error handling dasar untuk memastikan konfigurasi dapat dimuat dengan benar.
# 
