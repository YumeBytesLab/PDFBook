---
title: "Berkas, privasi, dan cadangan"
description: "Ketahui data lokal, permintaan opsional ke AI cloud, dan cara mencadangkan katalog bersama PDF asli."
---

## Data di komputer

Membaca, pustaka, pembuatan, konversi, dan ekstraksi gambar berjalan di komputer. Akun tidak diperlukan untuk membaca. Katalog menyimpan jalur dan informasi, bukan mengganti PDF dengan salinan cloud.

Memindah atau mengganti nama di luar app dapat memutus jalur. Pastikan berkas serta drive eksternal tersedia dan cadangkan secara terpisah.

## Cadangkan dan pulihkan

Pindahkan pustaka, folder, posisi baca, markah, sampul, dan pengaturan tampilan antar edisi atau komputer.

1. **Pengaturan → Lanjutan → Cadangkan dan pulihkan**
2. **Sertakan berkas asli** — Menyalin berkas lokal dalam pustaka. Buku daring menyimpan URL tanpa mengunduh isinya. Periksa berkas asli yang hilang sebelum mengekspor.
3. **Ekspor cadangan** — Pilih tujuan untuk membuat folder cadangan PDFBook. Simpan seluruh folder bersama dan pilih folder itu saat memulihkan.

**Tanpa berkas asli:** Berkas asli tidak disalin. Untuk membaca, berkas tetap diperlukan di lokasi semula.

**Impor cadangan → Tinjau cadangan → Pulihkan dan mulai ulang**

> Saya memahami bahwa pustaka dan pengaturan tampilan saat ini akan diganti dan PDFBook dimulai ulang. Pustaka tidak digabungkan.

Sebelum penggantian, cadangan yang dapat diimpor disimpan di backups dalam folder data. Berkas asli yang ada tidak dihapus. Tambahkan kembali folder pantauan setelah pemulihan. Pemindaian otomatis tidak dipindahkan untuk mencegah duplikat atau pemindaian folder yang tidak diinginkan.

Kunci API, pengaturan dan riwayat AI, kata sandi PDF tersimpan, serta lisensi tidak disertakan. Pengaturan AI dan lisensi saat ini tetap dipertahankan.

## Menyalin data aplikasi secara manual

1. Buka **Pengaturan → Lanjutan → Buka folder data pengguna**.
2. Tutup PDFBook agar tidak berubah selama disalin.
3. Salin folder tersebut dan folder PDF asli.

`library.json` berisi katalog, `preferences.json` pengaturan, `thumbnails/` sampul. Berkas lain bisa memuat chat, kata sandi tersimpan, lisensi, dan konfigurasi penyedia. Simpan cadangan sebagai data pribadi. Hanya menyalin `library.json` tidak menyimpan buku.

## Koneksi yang dipilih

Membuka URL mengunduh PDF. Pembaruan menghubungi GitHub, aktivasi memeriksa lisensi. AI cloud dapat mengirim pesan, konteks, metadata, teks dan gambar yang diminta. Ollama lokal hanya bila servernya lokal. URL jarak jauh tetap jarak jauh.

## Berbagi laporan

Utamakan langkah dan sampel publik tanpa kunci API, lisensi, kata sandi, atau dokumen pribadi. Jangan lampirkan seluruh folder data ke tempat publik. Lihat [kebijakan privasi](https://pdfbook.app/privacy) dan [panduan AI](/id/features/ai-assistant/).
