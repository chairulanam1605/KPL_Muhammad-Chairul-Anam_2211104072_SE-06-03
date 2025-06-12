##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 13
## Design Pattern
### 1. Menjelaskan Salah Satu Design Pattern

#### Contoh kondisi penggunaan design pattern “Observer”
Design pattern Observer cocok digunakan ketika kita memiliki satu objek (disebut Subject) yang perubahannya harus diberitahukan secara otomatis ke satu atau lebih objek lain (Observers).
Contoh nyatanya adalah dalam aplikasi notifikasi cuaca, di mana terdapat satu sistem pusat yang mengumpulkan data cuaca, dan berbagai elemen tampilan (seperti widget suhu, kelembapan, dan prakiraan cuaca) harus diperbarui secara otomatis setiap kali data cuaca berubah.

#### Langkah-langkah implementasi design pattern “Observer”
- Buat interface/abstract class Observer

Interface ini berisi method seperti update() yang nantinya akan dipanggil ketika terjadi perubahan pada Subject.

- Buat interface/abstract class Subject

Interface ini berisi method untuk menambahkan, menghapus, dan memberi notifikasi kepada observer, seperti attach(), detach(), dan notifyObservers().

- Implementasikan concrete class Subject

Kelas ini menyimpan state/data dan daftar observer. Saat data berubah, ia akan memanggil notifyObservers() untuk memberitahu semua observer.

- Implementasikan concrete class Observer

Setiap observer akan mengimplementasikan method update() untuk merespons perubahan dari Subject.

- Di program utama, daftarkan observer ke subject, ubah state di subject, dan amati bahwa observer otomatis mendapatkan pembaruan.



#### Kelebihan dan Kekurangan dari Observer Pattern
##### Kelebihan:

- Loose coupling (keterikatan longgar): Subject dan observer tidak saling tergantung secara langsung, memudahkan pemeliharaan dan pengembangan.

- Mudah diperluas: Kita bisa menambahkan observer baru kapan saja tanpa harus mengubah kode subject.

- Real-time updates: Sangat berguna dalam sistem yang membutuhkan sinkronisasi data secara otomatis (misalnya GUI, event system).

##### Kekurangan:

- Kompleksitas meningkat: Jika observer-nya banyak, pengelolaan dependensinya bisa menjadi rumit.

- Urutan notifikasi tidak dijamin: Tidak ada jaminan observer mana yang akan diberi tahu lebih dulu.

- Kesulitan debugging: Karena banyaknya interaksi tidak langsung antara objek, error bisa sulit dilacak.

### 2. ScreenShoot Code
#### a. Main.java
![Image](https://github.com/user-attachments/assets/3243936f-f6fd-48d9-842b-97722c005353)
#### b. ConcreteObserver.java
![Image](https://github.com/user-attachments/assets/f6ac5694-00bb-4976-aee9-959bbb227167)
#### Observer.java
![Image](https://github.com/user-attachments/assets/acecafb5-2c7c-4ece-96bc-78626b044548)
#### Subject.java
![Image](https://github.com/user-attachments/assets/265e56de-71c4-460e-85e9-8981fcb1792d)
### 3. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/e5f2202a-c015-44f7-a747-a83a724afd9f)

### 4. Menjelaskan Code pada File Main perbaris
```
public class Main {
```
Baris ini mendefinisikan sebuah class bernama Main. Class ini akan menjadi entry point atau titik awal eksekusi program.

```
public static void main(String[] args) {
```
Baris ini adalah method main(), yang merupakan fungsi utama yang pertama kali dijalankan saat program Java dieksekusi. String[] args digunakan untuk menerima argumen dari command line (jika ada).

```
Subject subject = new Subject();
```
Di sini dibuat objek baru dari class Subject, yaitu subject. Objek ini akan berperan sebagai pusat pengirim notifikasi kepada para observer.

```
Observer observer1 = new ConcreteObserver("Anam");
```
Membuat objek observer pertama dari class ConcreteObserver dengan nama "Anam". Observer ini akan mendengarkan (menerima notifikasi) dari subject.

```
Observer observer2 = new ConcreteObserver("Arka");
```
Membuat observer kedua dengan nama "Arka". Sama seperti observer1, ia akan menerima notifikasi dari subject.

```
subject.attach(observer1);
```
Mendaftarkan observer1 ke dalam daftar observer milik subject. Artinya, setiap ada pesan atau perubahan, observer1 akan diberitahu.

```
subject.attach(observer2);
```
Mendaftarkan observer2 ke dalam daftar observer milik subject, sama seperti langkah sebelumnya.

```
subject.createMessage("Haii, Senang Bertemu Dengan Mu");
```
Method createMessage() digunakan untuk mengatur atau mengirim pesan baru di subject. Saat ini dipanggil, semua observer yang sudah terdaftar (observer1 dan observer2) akan diberi notifikasi dan menampilkan pesan tersebut.

```
subject.detach(observer1);
```
Melepaskan atau menghapus observer1 dari daftar observer di subject. Setelah ini, observer1 tidak akan menerima pesan lagi.

```
subject.createMessage("Ayo pergi");
```
Mengirimkan pesan baru lagi dari subject. Namun kali ini, hanya observer2 yang menerima notifikasi karena observer1 sudah dilepas pada baris sebelumnya.

```
    }
}
```
Menutup blok kode dari method main() dan class Main.

### 5. Penjelasan Code
##### Program ini merupakan implementasi dari design pattern Observer dalam bahasa Java yang bertujuan untuk membangun sistem di mana objek-objek (observer) dapat memantau dan merespons perubahan yang terjadi pada objek lain (subject) secara otomatis. Dalam program ini terdapat class Subject yang bertindak sebagai pusat notifikasi, dan class ConcreteObserver yang mewakili pihak-pihak yang ingin memantau perubahan dari Subject. Setiap observer dapat melakukan registrasi ke subject menggunakan method attach(), dan berhenti berlangganan menggunakan detach(). Ketika Subject memanggil method createMessage(), pesan yang dibuat akan langsung diberitahukan kepada semua observer yang sudah terdaftar melalui pemanggilan method update(). Pada bagian fungsi utama (main), dibuat dua observer bernama "Anam" dan "Arka", lalu keduanya didaftarkan ke subject. Setelah subject mengirimkan pesan pertama, keduanya menerima notifikasi dan menampilkan pesan tersebut. Selanjutnya, observer "Anam" dilepas dari subject menggunakan detach(), sehingga ketika subject mengirimkan pesan kedua, hanya "Arka" yang menerima notifikasi. Implementasi ini memperlihatkan bagaimana Observer Pattern dapat menjaga keterkaitan antar objek tanpa membuat ketergantungan langsung, sehingga cocok digunakan dalam aplikasi yang membutuhkan sistem notifikasi dinamis atau event-driven.
# 
