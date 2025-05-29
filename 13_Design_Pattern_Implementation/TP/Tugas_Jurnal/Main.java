public class Main {
    public static void main(String[] args) {
        // a. Buat dua variabel
        PusatDataSingleton data1 = PusatDataSingleton.GetDataSingleton();
        PusatDataSingleton data2 = PusatDataSingleton.GetDataSingleton();

        // b. Tambah data pada data1
        data1.AddSebuahData("Alya");
        data1.AddSebuahData("Bima");
        data1.AddSebuahData("Cindy");
        data1.AddSebuahData("Dani");
        data1.AddSebuahData("Kak Rafi (Asisten Praktikum)");

        // c. Print semua data dari data2
        System.out.println("Print dari data2:");
        data2.PrintSemuaData();

        // d. Hapus asisten praktikum dari data2
        int indexAsisten = data2.GetSemuaData().indexOf("Kak Rafi (Asisten Praktikum)");
        data2.HapusSebuahData(indexAsisten);

        // e. Print lagi dari data1
        System.out.println("\nPrint dari data1 setelah penghapusan:");
        data1.PrintSemuaData();

        // f. Print jumlah data dari data1 dan data2
        System.out.println("\nJumlah data di data1: " + data1.GetSemuaData().size());
        System.out.println("Jumlah data di data2: " + data2.GetSemuaData().size());
    }
}
