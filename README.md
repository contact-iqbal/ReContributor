# ReContributor

ReContributor dirancang untuk membantu pengguna membuat *commit* otomatis pada GitHub untuk tanggal tertentu di masa lalu.  
Proyek ini dapat dimanfaatkan untuk mengisi grafik kontribusi (*contribution graph*) atau menciptakan pola visual yang menarik sebagai bentuk personalisasi profil GitHub.

--
## Panduan Penggunaan

Ikuti langkah-langkah berikut untuk mengonfigurasi dan menjalankan :

### 1.clone repositori
```bash
git clone https://github.com/contact-iqbal/ReContributor.git
cd ReContributor
```
### 2.initialization project
```bash
npm init -y
```
### 3. install dependencies
```bash
npm install moment simple-git random
```
### 4. create repository (for pushing)
create a repository and connect your repository to push ReContributor to github

### 5. run project
```bash
node index.js
```

### Buat Skrip Commit

- Buat berkas **JavaScript** untuk mengatur proses pembuatan *commit*.  
- Buat berkas **JSON** yang berfungsi untuk menyimpan data waktu *commit*.

---

## Modul NPM yang Digunakan

- [**moment**](https://www.npmjs.com/package/moment) — Mengelola dan memanipulasi data waktu dan tanggal.  
- [**simple-git**](https://www.npmjs.com/package/simple-git) — Mempermudah eksekusi perintah Git melalui antarmuka JavaScript.  
- [**random**](https://www.npmjs.com/package/random) — Menghasilkan nilai acak yang digunakan untuk variasi *commit*.  

---

## Kontributor

Terima kasih kepada [**fenrir2608**](https://github.com/fenrir2608) atas inspirasi dan kontribusinya dalam pengembangan proyek ini.
