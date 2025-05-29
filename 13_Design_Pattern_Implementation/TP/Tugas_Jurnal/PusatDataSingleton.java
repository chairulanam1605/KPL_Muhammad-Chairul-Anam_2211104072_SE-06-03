import java.util.ArrayList;
import java.util.List;

public class PusatDataSingleton {
    private static PusatDataSingleton _instance = null;
    private List<String> DataTersimpan;

    // Konstruktor privat
    private PusatDataSingleton() {
        DataTersimpan = new ArrayList<>();
    }

    // Method untuk mendapatkan instance
    public static PusatDataSingleton GetDataSingleton() {
        if (_instance == null) {
            _instance = new PusatDataSingleton();
        }
        return _instance;
    }

    // Mengembalikan semua data
    public List<String> GetSemuaData() {
        return DataTersimpan;
    }

    // Print semua data
    public void PrintSemuaData() {
        if (DataTersimpan.isEmpty()) {
            System.out.println("(Data kosong)");
        } else {
            for (String data : DataTersimpan) {
                System.out.println(data);
            }
        }
    }

    // Menambahkan data
    public void AddSebuahData(String input) {
        DataTersimpan.add(input);
    }

    // Menghapus data berdasarkan index
    public void HapusSebuahData(int index) {
        if (index >= 0 && index < DataTersimpan.size()) {
            DataTersimpan.remove(index);
        } else {
            System.out.println("Index tidak valid.");
        }
    }
}
