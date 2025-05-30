##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Jurnal Modul 12
## GUI Sederhana
### 1. ScreenShoot Code
#### a. index.html
![Image](https://github.com/user-attachments/assets/ebef0f04-2c7f-49f8-abcd-560b842d1499)
#### b. script.js
![Image](https://github.com/user-attachments/assets/74406cf5-0e44-4bff-bd93-ba39ebccbd0c)
#### c. script.test.js
![Image](https://github.com/user-attachments/assets/b7d936a8-4918-41ba-b7c5-01ba2459ce2b)
### 2. ScreenShoot Output
#### a. Output Program
![Image](https://github.com/user-attachments/assets/d7d8b085-c1d8-4296-8784-2aaab955a79a)

![Image](https://github.com/user-attachments/assets/5fa65220-4d56-4df8-b2d4-138dccd06759)

![Image](https://github.com/user-attachments/assets/a2ef60ec-3f03-44d5-9d2c-26dce250ed99)

![Image](https://github.com/user-attachments/assets/0399e8e9-a007-4484-99a2-95cbcdd42a15)

![Image](https://github.com/user-attachments/assets/fda26e93-f325-4f9d-8a6a-d0e33cd9942e)
#### b. Output testing
![Image](https://github.com/user-attachments/assets/54c12b24-dd9c-4960-9ec4-9cb796ed6db5)
### 3. Penjelasan Code
##### Program ini merupakan implementasi antarmuka grafis sederhana menggunakan JavaScript dan HTML yang bertujuan untuk menghitung hasil perpangkatan dari dua bilangan bulat berdasarkan aturan khusus. Dalam program ini, disediakan sebuah form yang terdiri dari dua input teks (textbox) untuk memasukkan nilai basis dan eksponen, satu tombol (button) untuk memproses data, serta satu label untuk menampilkan hasil perhitungan. Bagian utama dari program terletak pada method bernama CariNilaiPangkat() yang menerima dua parameter bertipe integer dan menghasilkan nilai pangkat dengan proses iterasi manual (tanpa menggunakan fungsi bawaan seperti Math.pow). Method ini memiliki empat aturan logika: apabila eksponen bernilai 0, maka hasilnya adalah 1; apabila eksponen bernilai negatif maka hasilnya adalah -1; apabila eksponen lebih dari 10 atau basis lebih dari 100 maka hasilnya adalah -2; dan apabila hasil perpangkatan melebihi batas maksimal bilangan integer maka akan mengembalikan nilai -3. Ketika pengguna memasukkan dua angka dan menekan tombol, method CariNilaiPangkat() akan dipanggil dan hasilnya akan ditampilkan pada label di antarmuka. Untuk memastikan keandalan fungsi yang dibuat, program ini juga dilengkapi dengan kode unit test menggunakan Jest yang menguji setiap kemungkinan jalur logika dalam fungsi tersebut. Dengan demikian, implementasi ini menunjukkan bagaimana JavaScript dapat digunakan tidak hanya untuk menciptakan interaksi langsung di sisi klien, tetapi juga untuk menerapkan pengujian logika secara menyeluruh guna menjaga kestabilan dan akurasi fungsionalitas program.

