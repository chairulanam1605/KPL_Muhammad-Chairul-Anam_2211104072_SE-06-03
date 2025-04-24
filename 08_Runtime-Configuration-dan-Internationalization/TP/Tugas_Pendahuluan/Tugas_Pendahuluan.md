##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 8
## RUNTIME CONFIGURATION
### 1. ScreenShoot Code
#### a. covid_config.json
![Image](https://github.com/user-attachments/assets/ee5d27f6-3460-4028-b145-ce06dccb3f5f)
#### b. covid_config.js
![Image](https://github.com/user-attachments/assets/a957ff4c-283e-4454-8409-1eb683b40ae3)
![Image](https://github.com/user-attachments/assets/30d4ed8d-2c72-42e9-9508-502337ffda83)
![Image](https://github.com/user-attachments/assets/507ebdf9-8396-4c47-bdae-71afadbd7b43)
#### c. index.js
![Image](https://github.com/user-attachments/assets/3ec03eff-47a0-4e0a-92ca-d44346c9273f)
![Image](https://github.com/user-attachments/assets/450a9abb-c58e-4e99-8092-52a1a55b7ea7)
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/09823602-8d6b-40f0-b96c-760c17abbc02)
### 3. Penjelasan Code
##### Program ini merupakan implementasi sistem pemeriksaan kesehatan berbasis Node.js yang menggunakan runtime configuration untuk menentukan aturan masuk gedung selama pandemi COVID-19. Sistem ini terdiri dari tiga komponen utama: file konfigurasi JSON yang menyimpan pengaturan seperti satuan suhu (Celcius/Fahrenheit), batas hari demam, dan pesan penerimaan/penolakan; class CovidConfig yang bertugas memuat, mengelola, dan memodifikasi konfigurasi tersebut (termasuk fitur ubah satuan suhu); serta program utama yang berinteraksi dengan user melalui command line untuk memeriksa suhu tubuh dan riwayat demam. Ketika dijalankan, program akan mengevaluasi input pengguna berdasarkan konfigurasi yang aktif - jika suhu dalam range normal (36.5-37.5°C atau 97.7-99.5°F) dan terakhir demam kurang dari batas hari yang ditentukan, sistem akan mengizinkan masuk dengan pesan penerimaan, sebaliknya akan menampilkan pesan penolakan.

