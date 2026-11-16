# Data portofolio

Semua isi teks website ada di file JSON di folder ini. Ubah isinya di sini,
komponen di `src/components/sections/` akan ikut berubah sendiri.

| File                | Dipakai oleh                     |
| ------------------- | -------------------------------- |
| `profile.json`      | Nama, inisial, peran, foto profil (Hero, About, Nav, Footer) |
| `hero.json`         | Sapaan, deskripsi, stiker, pita berjalan |
| `about.json`        | Paragraf dan kotak fakta di About |
| `education.json`    | Riwayat pendidikan & organisasi  |
| `experience.json`   | Pengalaman organisasi, magang, kerja |
| `skills.json`       | Kelompok keahlian                |
| `projects.json`     | Daftar proyek                    |
| `certificates.json` | Sertifikat & penghargaan         |
| `contacts.json`     | Kontak (Hero & Contact)          |
| `nav.json`          | Menu navigasi                    |

## Foto

Foto disimpan di `public/images/`:

- `public/images/profile/`      foto profil
- `public/images/projects/`     screenshot proyek
- `public/images/certificates/` gambar sertifikat

Panggil dari JSON dengan path yang diawali `/images/...`, contoh:

```json
"photo": "/images/profile/foto.jpg"
"image": "/images/projects/perpustakaan.png"
"url":   "/images/certificates/dicoding.pdf"
```

Biarkan `""` (kosong) kalau belum ada, tampilannya otomatis menyesuaikan.

## Warna

JSON hanya berisi data. Warna kartu diatur langsung di tiap komponen
(`const colors` di `src/components/sections/`) dan dipakai bergiliran.
