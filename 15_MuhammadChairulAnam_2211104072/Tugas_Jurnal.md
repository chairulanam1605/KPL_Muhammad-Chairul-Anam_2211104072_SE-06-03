##### Muhammad Chairul Anam
##### 2211104072/SE-06-03

# Tugas Jurnal Modul 14
## PENGEMBANGAN DENGAN SECURE CODING PRACTICES
### 1. ScreenShoot Code
#### a. Login.html
```
<!-- pages/login.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="../assets/style.css">
</head>

<body>
    <div class="container">
        <h2>Login</h2>
        <input type="text" id="loginUsername" placeholder="Username">
        <input type="password" id="loginPassword" placeholder="Password">
        <button onclick="login()">Login</button>
        <button onclick="goToRegister()">Belum punya akun? Register</button>
        <div class="message" id="message"></div>
    </div>


    <script>
        const {
            dialog
        } = require('@electron/remote');
        const fs = require('fs');
        const crypto = require('crypto');
        const path = require('path');

        const userFile = path.join(__dirname, '..', 'users.json');

        function hashPassword(password) {
            return crypto.createHash('sha256').update(password).digest('hex');
        }

        function login() {
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value.trim();
            const message = document.getElementById('message');

            if (!fs.existsSync(userFile)) {
                message.textContent = 'Belum ada user terdaftar.';
                message.style.color = 'red';
                return;
            }

            const users = JSON.parse(fs.readFileSync(userFile));
            const hashed = hashPassword(password);

            if (users[username] && users[username] === hashed) {
                dialog.showMessageBox({
                    type: 'info',
                    message: 'Login berhasil!'
                });
            } else {
                dialog.showErrorBox('Login Gagal', 'Username atau password salah.');
            }
        }

        function goToRegister() {
            window.location.href = 'register.html';
        }
    </script>
</body>

</html>
```
#### b. Register.html
```
<!-- pages/register.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="stylesheet" href="../assets/style.css">
</head>

<body>
    <div class="container">
        <h2>Register</h2>
        <input type="text" id="regUsername" placeholder="Username">
        <input type="password" id="regPassword" placeholder="Password">
        <button onclick="register()">Register</button>
        <button onclick="goToLogin()">Sudah punya akun? Login</button>
        <div class="message" id="message"></div>
    </div>

    <script>
        const {
            dialog
        } = require('@electron/remote');
        const fs = require('fs');
        const crypto = require('crypto');
        const path = require('path');

        const userFile = path.join(__dirname, '..', 'users.json');

        function hashPassword(password) {
            return crypto.createHash('sha256').update(password).digest('hex');
        }

        function validateInput(username, password) {
            const usernameRegex = /^[A-Za-z]{4,20}$/;
            const passwordLength = /^.{8,20}$/;
            const hasNumber = /\d/;
            const hasSpecialChar = /[!@#$%^&*]/;

            if (!usernameRegex.test(username)) return 'Username hanya huruf (4-20 karakter)';
            if (!passwordLength.test(password)) return 'Password harus 8-20 karakter';
            if (!hasNumber.test(password)) return 'Password harus ada angka';
            if (!hasSpecialChar.test(password)) return 'Password harus ada karakter unik (!@#$%^&*)';
            if (password.toLowerCase().includes(username.toLowerCase())) return 'Password tidak boleh mengandung username';
            return null;
        }

        function register() {
            const username = document.getElementById('regUsername').value.trim();
            const password = document.getElementById('regPassword').value.trim();
            const message = document.getElementById('message');

            const validationMsg = validateInput(username, password);
            if (validationMsg) {
                message.textContent = validationMsg;
                message.style.color = 'red';
                return;
            }

            let users = {};
            if (fs.existsSync(userFile)) {
                users = JSON.parse(fs.readFileSync(userFile));
            }

            if (users[username]) {
                dialog.showErrorBox('Registrasi Gagal', 'Username sudah terdaftar.');
                return;
            }

            users[username] = hashPassword(password);
            fs.writeFileSync(userFile, JSON.stringify(users));
            dialog.showMessageBox({
                type: 'info',
                message: 'Akun berhasil dibuat!'
            });

        }

        function goToLogin() {
            window.location.href = 'login.html';
        }
    </script>
</body>

</html>
```
#### c. style.css
```
body {
    font-family: Arial, sans-serif;
    background: #f0f4f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.container {
    background: white;
    padding: 20px 30px;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h2 {
    text-align: center;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
}

button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.message {
    margin-top: 10px;
    text-align: center;
}
```
#### d. main.js
```
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 400,
        height: 550,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Pertama kali buka halaman login
    win.loadFile('pages/login.html');
    remoteMain.enable(win.webContents);

}

const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
```
#### e. users.json
```
{"anam":"1c8b4bb6f952d59b15ec7360000f5a18be25c187bfba2296036a8e484d073799","MuhammadChairulAnam":"514261fcc88eb83340f66b1f5e790fbfb1f837e2069434d8c8b3624970776ffe"}
```
### 2. ScreenShoot Output
![Image](https://github.com/user-attachments/assets/4aacc324-4296-450c-b777-31cd504ded6d)
![Image](https://github.com/user-attachments/assets/5ad546f4-1deb-439a-81c1-ab27eda82c79)
![Image](https://github.com/user-attachments/assets/9339694d-a668-47af-a057-051738d26ed3)
![Image](https://github.com/user-attachments/assets/67e3cb92-ed8f-472f-93c1-3ec3cedc9d38)
![Image](https://github.com/user-attachments/assets/2448efca-1562-4b14-860e-ea8f66286192)
### 3. Penjelasan Code
##### Program ini dibuat untuk mempraktikkan pembuatan aplikasi desktop menggunakan Electron dengan fitur registrasi dan login user. Data user disimpan dalam file users.json dalam format JSON, yang dibaca dan ditulis menggunakan Node.js dan modul fs. Program ini juga menerapkan prinsip Secure Coding Practices, khususnya pada validasi input dan manajemen password. Validasi input dilakukan untuk memastikan username dan password sesuai dengan ketentuan panjang, karakter yang diizinkan, serta keamanan isi password. Untuk keamanan data, password yang disimpan telah di-hash menggunakan algoritma SHA256. Program memisahkan halaman login dan registrasi dalam file HTML yang berbeda, serta menyediakan notifikasi interaktif menggunakan dialog dari Electron untuk memberi umpan balik yang jelas kepada pengguna. Tujuan dari program ini adalah memberikan pemahaman praktis tentang pembuatan sistem autentikasi yang aman dan terstruktur menggunakan teknologi desktop modern berbasis JavaScript.
# 
