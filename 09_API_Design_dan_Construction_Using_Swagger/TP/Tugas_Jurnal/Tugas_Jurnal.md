##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Jurnal Modul 9
## PROJECT WEB API
### 1. ScreenShoot Code
#### a. Jurnal.ipynb
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
class Movie(BaseModel):
    """Model representing a movie with title, director, stars, and description"""
    title: str
    director: str
    stars: List[str]
    description: str

class ResponseMessage(BaseModel):
    """Standard response model for API responses"""
    pesan: str
    data: Optional[Dict[str, Any]] = None

# Initialize data
class MovieRepository:
    """Repository to manage movie data"""
    def __init__(self):
        self.movie_list = [
            {
                "title": "The Shawshank Redemption",
                "director": "Frank Darabont",
                "stars": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
                "description": "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion."
            },
            {
                "title": "The Godfather",
                "director": "Francis Ford Coppola",
                "stars": ["Marlon Brando", "Al Pacino", "James Caan"],
                "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            },
            {
                "title": "The Dark Knight",
                "director": "Christopher Nolan",
                "stars": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
                "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
            }
        ]

    def get_all(self) -> List[Dict[str, Any]]:
        """Get all movie records"""
        return self.movie_list

    def get_by_index(self, index: int) -> Dict[str, Any]:
        """Get a movie by index"""
        if 0 <= index < len(self.movie_list):
            return self.movie_list[index]
        return None

    def add(self, movie: Movie) -> None:
        """Add a new movie"""
        self.movie_list.append(movie.dict())

    def delete(self, index: int) -> Dict[str, Any]:
        """Delete a movie by index"""
        if 0 <= index < len(self.movie_list):
            return self.movie_list.pop(index)
        return None

# Create the FastAPI application
def create_app() -> FastAPI:
    """Create and configure the FastAPI application"""
    app = FastAPI(
        title="Movie API",
        description="API for managing movie data from IMDB top movies",
        version="1.0.0"
    )

    # Create repository instance
    repo = MovieRepository()

    # Register routes
    @app.get("/api/Movies", response_model=List[Dict[str, Any]])
    def get_all_movies():
        """Get all movie data"""
        return repo.get_all()

    @app.get("/api/Movies/{id}")
    def get_movie(id: int):
        """Get movie by index id"""
        movie = repo.get_by_index(id)
        if movie:
            return movie
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Movie dengan ID tersebut tidak ditemukan"
        )

    @app.post("/api/Movies", response_model=ResponseMessage)
    def add_movie(movie: Movie):
        """Add a new movie"""
        repo.add(movie)
        return ResponseMessage(pesan="Film berhasil ditambahkan")

    @app.delete("/api/Movies/{id}", response_model=ResponseMessage)
    def delete_movie(id: int):
        """Delete movie by index id"""
        deleted = repo.delete(id)
        if deleted:
            return ResponseMessage(
                pesan="Film berhasil dihapus",
                data=deleted
            )
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Movie dengan ID tersebut tidak ditemukan"
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
![Image](https://github.com/user-attachments/assets/022a65b9-9e5a-4893-a186-5f3212ca4d3c)

#### b. Get
![Image](https://github.com/user-attachments/assets/02ff87a4-f446-4beb-9b8a-f5986f30bce9)

#### c. Post
![Image](https://github.com/user-attachments/assets/b697c393-d58d-4444-8247-b829b8b30cf3)
![Image](https://github.com/user-attachments/assets/b2380d92-8bcf-4127-b820-9f5c5006a002)

#### d. Get By Index
![Image](https://github.com/user-attachments/assets/bf92b21f-6aa6-4851-92ba-c28952208fe2)

#### e. Delete
![Image](https://github.com/user-attachments/assets/c24a49ce-5cba-42aa-aabe-116360d705df)
![Image](https://github.com/user-attachments/assets/59390936-b4a7-4685-9800-3d57c11b2978)
### 3. Penjelasan Code
##### Program ini merupakan implementasi Web API sederhana menggunakan FastAPI untuk mengelola data film populer dari IMDb. Data disimpan dalam MovieRepository sebagai list berisi informasi judul, sutradara, pemeran, dan deskripsi film. API menyediakan beberapa endpoint, seperti: GET /api/Movies untuk menampilkan seluruh film, GET /api/Movies/{id} untuk melihat detail film berdasarkan indeks, POST /api/Movies untuk menambah film baru, dan DELETE /api/Movies/{id} untuk menghapus film. Model data divalidasi otomatis menggunakan Pydantic (Movie dan ResponseMessage), dan server dijalankan dengan uvicorn serta dibuka ke publik menggunakan ngrok. Program ini menunjukkan bagaimana FastAPI dapat digunakan untuk membangun RESTful API yang ringan, cepat, dan mudah dikembangkan.

