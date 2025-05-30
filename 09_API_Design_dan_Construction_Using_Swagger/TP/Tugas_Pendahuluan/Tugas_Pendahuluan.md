##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Pendahuluan Modul 9
## PROJECT WEB API
### 1. ScreenShoot Code
#### a. TP.ipynb
```
# Install library (jalankan ini untuk menginstall dependencies)
!pip install fastapi uvicorn nest-asyncio pyngrok

# Import libraries
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
import nest_asyncio
from pyngrok import ngrok, conf
import uvicorn
from typing import List, Dict, Any, Optional

# Models
class Mahasiswa(BaseModel):
    """Model representing a student with name and student ID"""
    nama: str
    nim: str

class ResponseMessage(BaseModel):
    """Standard response model for API responses"""
    pesan: str
    data: Optional[Dict[str, Any]] = None

# Initialize data
class MahasiswaRepository:
    """Repository to manage mahasiswa data"""
    def __init__(self):
        self.mahasiswa_list = [
            {"nama": "Muhammad Chairul Anam", "nim": "2211104072"},
            {"nama": "Leo Nardo Davida", "nim": "2111104586"},
            {"nama": "Stephen Arnold", "nim": "2211104032"},
            {"nama": "Tony Tomphson", "nim": "2111104556"},
        ]

    def get_all(self) -> List[Dict[str, str]]:
        """Get all mahasiswa records"""
        return self.mahasiswa_list

    def get_by_index(self, index: int) -> Dict[str, str]:
        """Get a mahasiswa by index"""
        if 0 <= index < len(self.mahasiswa_list):
            return self.mahasiswa_list[index]
        return None

    def add(self, mahasiswa: Mahasiswa) -> None:
        """Add a new mahasiswa"""
        self.mahasiswa_list.append(mahasiswa.dict())

    def delete(self, index: int) -> Dict[str, str]:
        """Delete a mahasiswa by index"""
        if 0 <= index < len(self.mahasiswa_list):
            return self.mahasiswa_list.pop(index)
        return None

# Create the FastAPI application
def create_app() -> FastAPI:
    """Create and configure the FastAPI application"""
    app = FastAPI(
        title="Mahasiswa API",
        description="API for managing student data",
        version="1.0.0"
    )

    # Create repository instance
    repo = MahasiswaRepository()

    # Register routes
    @app.get("/api/mahasiswa", response_model=List[Dict[str, str]])
    def get_semua_mahasiswa():
        """Get all mahasiswa data"""
        return repo.get_all()

    @app.get("/api/mahasiswa/{index}")
    def get_mahasiswa(index: int):
        """Get mahasiswa by index"""
        mahasiswa = repo.get_by_index(index)
        if mahasiswa:
            return mahasiswa
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Index tidak ditemukan"
        )

    @app.post("/api/mahasiswa", response_model=ResponseMessage)
    def tambah_mahasiswa(mahasiswa: Mahasiswa):
        """Add a new mahasiswa"""
        repo.add(mahasiswa)
        return ResponseMessage(pesan="Mahasiswa berhasil ditambahkan")

    @app.delete("/api/mahasiswa/{index}", response_model=ResponseMessage)
    def hapus_mahasiswa(index: int):
        """Delete mahasiswa by index"""
        deleted = repo.delete(index)
        if deleted:
            return ResponseMessage(
                pesan="Mahasiswa berhasil dihapus",
                data=deleted
            )
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Index tidak ditemukan"
        )

    return app

def start_server():
    """Configure and start the server with ngrok tunnel"""
    # Configure ngrok
    conf.get_default().auth_token = "2wFymwB49ivdxPUxcGRsyEZF9OM_88dueVUsHUg3BtJjrGAL"

    # Apply nest_asyncio to allow asyncio to work in Jupyter
    nest_asyncio.apply()

    # Create ngrok tunnel
    public_url = ngrok.connect(8000)
    print("🚀 Swagger UI:", public_url.public_url + "/docs")
    print("🚀 API URL:", public_url.public_url)

    # Run the server
    app = create_app()
    uvicorn.run(app, port=8000)

# Run the application
if __name__ == "__main__":
    start_server()
```
### 2. ScreenShoot Output
#### a. Default
![Image](https://github.com/user-attachments/assets/1f27d0bc-b24f-49d1-a50d-4973a02f9aa1)

#### b. Get
![Image](https://github.com/user-attachments/assets/570e2527-9b87-401a-9f6c-c64b2e1c9a02)

#### c. Post
![Image](https://github.com/user-attachments/assets/c713a003-c89a-4102-aff5-04c02025dc8a)
![Image](https://github.com/user-attachments/assets/0e728aa2-bbe5-4f67-b382-bcc660522a64)

#### d. Get By Index
![Image](https://github.com/user-attachments/assets/2cee62b8-6a97-4b0b-ae71-79dc426f1d00)

#### e. Delete
![Image](https://github.com/user-attachments/assets/63464eae-2a23-4bf0-8668-47207ec18dc2)
![Image](https://github.com/user-attachments/assets/8425010a-f8c2-448a-9e9d-c7c859cc2bef)

### 3. Penjelasan Code
##### Program ini merupakan implementasi Web API sederhana menggunakan Python dan FastAPI yang berfungsi untuk mengelola data mahasiswa. Data mahasiswa disimpan dalam class MahasiswaRepository yang menyediakan fungsi untuk menampilkan seluruh data, mengambil data berdasarkan indeks, menambah data baru, dan menghapus data. Struktur data mahasiswa didefinisikan dalam class Mahasiswa, sedangkan komunikasi antar client dan server dilakukan melalui beberapa endpoint: GET /api/mahasiswa → menampilkan seluruh mahasiswa, GET /api/mahasiswa/{index} → menampilkan mahasiswa berdasarkan indeks, POST /api/mahasiswa → menambah mahasiswa baru, DELETE /api/mahasiswa/{index} → menghapus mahasiswa. Server dijalankan dengan bantuan uvicorn dan dibuka ke publik menggunakan ngrok. Program ini cocok sebagai dasar pembuatan layanan web untuk keperluan CRUD data sederhana.

