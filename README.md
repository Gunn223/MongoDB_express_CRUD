# Cara Menjalankan Proyek/Project

Selamat datang:
langkah-langkah penggunaan MongoDB bersama Node.js untuk menjalankan server .

 Langkah 1: Menyiapkan Lingkungan

Pastikan Anda sudah menginstal MongoDB dan Node.js di sistem Anda. Jika belum, silakan ikuti panduan instalasi resmi:

- [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)
- [Node.js Download Page](https://nodejs.org/)

 Langkah 2: Menjalankan MongoDB Server

Buka terminal dan jalankan MongoDB Diamond dengan perintah:

```bash
mongod --dbpath /path/to/your/data/directory

 Langkah 3: Buka terminal baru dan jalankan Mongosh untuk terhubung ke server MongoDB:
- mongosh
- use try-store
 Langkah 4: Menambahkan Data dengan Node.js
- node seeds.js
Langkah 5: Menjalankan Server Node.js
- node index

Server dapat diakses melalui http://localhost:9000 di browser Anda.
