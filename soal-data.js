// Data soal & konten CPA untuk Metakognitif AI - Matriks dalam Aljabar Linear
// Tidak ada dependency eksternal - modul ES biasa.

export const CPA_STAGES = [
  {
    key: 'concrete',
    label: 'Concrete',
    dlLabel: 'Joyful Learning',
    title: 'Dunia Nyata: Rak Barang Toko',
    narration:
      'Sebuah toko punya 2 rak. Rak 1 berisi 4 baju dan 3 celana. Rak 2 berisi 2 baju dan 5 celana. Kita bisa menyusun jumlah barang ini ke dalam sebuah tabel baris-kolom.',
    detail: 'Tabel semacam ini — kumpulan angka yang disusun dalam baris dan kolom — adalah gambaran konkret dari sebuah MATRIKS.',
  },
  {
    key: 'pictorial',
    label: 'Pictorial',
    dlLabel: 'Joyful Learning',
    title: 'Menggambarkannya sebagai Grid/Tabel',
    narration:
      'Tabel rak barang tadi bisa digambar sebagai grid 2 baris × 2 kolom. Setiap sel mewakili satu jenis barang di satu rak. Ini disebut ORDO matriks: 2×2 (baris × kolom).',
    detail: 'Perhatikan posisi setiap angka: baris menunjukkan rak, kolom menunjukkan jenis barang. Posisi ini penting saat kita nanti menjumlahkan atau mengalikan matriks.',
  },
  {
    key: 'abstract',
    label: 'Abstract',
    dlLabel: 'Meaningful Learning',
    title: 'Menuliskannya sebagai Notasi Matriks',
    narration:
      'A = [4 3 ; 2 5] adalah bentuk ABSTRAK dari tabel rak barang. Baris pertama = Rak 1, baris kedua = Rak 2. Elemen matriks ditulis a(ij), dengan i = baris, j = kolom.',
    detail: 'Dari sini kita bisa melakukan operasi matriks: penjumlahan, pengurangan, perkalian skalar, perkalian matriks, hingga mencari determinan dan invers — dasar aljabar linear lanjutan.',
  },
];

// type: 'mc' (pilihan ganda), 'match' (menjodohkan), 'fill' (isian)
export const QUESTIONS = [
  {
    id: 1,
    type: 'mc',
    stage: 'Concrete',
    dl: 'Meaningful Learning',
    prompt:
      'Gudang A menyimpan 5 kotak dan 2 palet. Gudang B menyimpan 3 kotak dan 4 palet. Manakah matriks yang benar merepresentasikan data ini? (baris = gudang, kolom = kotak, palet)',
    options: [
      '[5 2 ; 3 4]',
      '[5 3 ; 2 4]',
      '[2 5 ; 4 3]',
      '[3 4 ; 5 2]',
    ],
    correctIndex: 0,
    explanation:
      'Baris pertama mewakili Gudang A (5 kotak, 2 palet) dan baris kedua Gudang B (3 kotak, 4 palet), sesuai urutan cerita.',
    hint: 'Cocokkan urutan gudang dengan urutan baris, dan urutan barang dengan urutan kolom.',
  },
  {
    id: 2,
    type: 'mc',
    stage: 'Pictorial',
    dl: 'Joyful Learning',
    prompt:
      'Sebuah matriks digambarkan sebagai grid dengan 3 baris dan 2 kolom. Berapakah ordo matriks tersebut?',
    options: ['2×3', '3×2', '3×3', '2×2'],
    correctIndex: 1,
    explanation: 'Ordo matriks ditulis sebagai (jumlah baris)×(jumlah kolom), sehingga 3 baris dan 2 kolom menghasilkan ordo 3×2.',
    hint: 'Ingat urutannya: baris dahulu, baru kolom.',
  },
  {
    id: 3,
    type: 'mc',
    stage: 'Abstract',
    dl: 'Meaningful Learning',
    prompt: 'Diketahui A = [1 2 ; 3 4] dan B = [5 6 ; 7 8]. Berapakah A + B?',
    options: [
      '[6 8 ; 10 12]',
      '[5 12 ; 21 32]',
      '[6 6 ; 10 8]',
      '[1 2 ; 3 4]',
    ],
    correctIndex: 0,
    explanation: 'Penjumlahan matriks dilakukan elemen demi elemen pada posisi yang sama: (1+5), (2+6), (3+7), (4+8).',
    hint: 'Jumlahkan elemen pada posisi baris-kolom yang sama, bukan mengalikan.',
  },
  {
    id: 4,
    type: 'mc',
    stage: 'Pictorial',
    dl: 'Mindful Learning',
    prompt: 'Mengapa dua matriks HANYA bisa dijumlahkan jika keduanya memiliki ordo yang sama?',
    options: [
      'Karena setiap elemen dijumlahkan dengan elemen pada posisi yang sama, sehingga jumlah baris dan kolom harus cocok',
      'Karena hasilnya harus berupa matriks persegi',
      'Karena determinannya harus sama',
      'Karena elemen matriks harus berupa bilangan bulat',
    ],
    correctIndex: 0,
    explanation: 'Penjumlahan matriks berbasis posisi elemen; jika ordo berbeda, ada elemen yang tidak memiliki pasangan posisi untuk dijumlahkan.',
    hint: 'Bayangkan mencoba menjumlahkan tabel 2×2 dengan tabel 3×3 — sel mana yang tidak punya pasangan?',
  },
  {
    id: 5,
    type: 'match',
    stage: 'Concrete → Abstract',
    dl: 'Meaningful Learning',
    prompt: 'Jodohkan setiap cerita data konkret dengan bentuk matriksnya.',
    left: [
      'Toko A: 3 buku, 2 pensil — Toko B: 1 buku, 4 pensil',
      'Kelas X: 10 laki-laki, 15 perempuan — Kelas Y: 8 laki-laki, 12 perempuan',
      'Hari Senin: suhu 28°, kelembaban 70 — Hari Selasa: suhu 30°, kelembaban 65',
    ],
    rightOptions: [
      '[3 2 ; 1 4]',
      '[10 15 ; 8 12]',
      '[28 70 ; 30 65]',
    ],
    correctMap: [0, 1, 2],
    explanation: 'Setiap baris mewakili satu entitas (toko/kelas/hari), dan setiap kolom mewakili satu jenis data, sesuai urutan penyebutan dalam cerita.',
    hint: 'Cocokkan urutan entitas pertama dan kedua pada cerita dengan urutan baris pada matriks.',
  },
  {
    id: 6,
    type: 'match',
    stage: 'Pictorial',
    dl: 'Mindful Learning',
    prompt: 'Jodohkan istilah matriks dengan penjelasan visualnya pada grid.',
    left: [
      'Elemen a(2,1)',
      'Ordo matriks',
      'Matriks persegi',
    ],
    rightOptions: [
      'Angka pada baris ke-2, kolom ke-1',
      'Ukuran grid: jumlah baris × jumlah kolom',
      'Matriks dengan jumlah baris sama dengan jumlah kolom',
    ],
    correctMap: [0, 1, 2],
    explanation: 'a(2,1) menunjuk posisi baris 2 kolom 1; ordo menyatakan ukuran grid; matriks persegi punya baris = kolom (misal 2×2, 3×3).',
    hint: 'Pikirkan bagaimana kita menunjuk sebuah sel spesifik pada tabel/grid.',
  },
  {
    id: 7,
    type: 'match',
    stage: 'Abstract',
    dl: 'Meaningful Learning',
    prompt: 'Jodohkan operasi matriks dengan hasilnya. Diketahui A = [2 0 ; 1 3].',
    left: [
      '2 × A (perkalian skalar)',
      'Determinan A',
      'Transpose A (A^T)',
    ],
    rightOptions: [
      '[4 0 ; 2 6]',
      '6',
      '[2 1 ; 0 3]',
    ],
    correctMap: [0, 1, 2],
    explanation: 'Perkalian skalar mengalikan tiap elemen dengan 2; determinan = (2×3)-(0×1) = 6; transpose menukar baris menjadi kolom.',
    hint: 'Kerjakan satu per satu: skalar mengalikan semua elemen, determinan pakai rumus ad-bc, transpose menukar posisi baris-kolom.',
  },
  {
    id: 8,
    type: 'fill',
    stage: 'Abstract',
    dl: 'Meaningful Learning',
    prompt: 'Diketahui matriks A = [3 5 ; 2 4]. Berapakah nilai determinan A? (gunakan rumus ad - bc)',
    accept: ['2'],
    explanation: 'Determinan = (3×4) - (5×2) = 12 - 10 = 2.',
    hint: 'Rumus determinan matriks 2×2 adalah (a×d) - (b×c), dengan a,b di baris atas dan c,d di baris bawah.',
    placeholder: 'Masukkan angka',
  },
  {
    id: 9,
    type: 'fill',
    stage: 'Abstract',
    dl: 'Meaningful Learning',
    prompt: 'Diketahui A = [1 4 ; 2 6] dan B = [3 1 ; 0 2]. Berapakah elemen baris 1 kolom 1 dari hasil A + B?',
    accept: ['4'],
    explanation: 'Elemen baris1-kolom1 dari A adalah 1, dari B adalah 3. Dijumlahkan: 1 + 3 = 4.',
    hint: 'Fokus hanya pada elemen di posisi baris 1, kolom 1 dari kedua matriks, lalu jumlahkan.',
    placeholder: 'Masukkan angka',
  },
  {
    id: 10,
    type: 'fill',
    stage: 'Mindful',
    dl: 'Mindful Learning',
    prompt:
      'Sebuah matriks persegi memiliki determinan sama dengan 0. Matriks seperti ini disebut matriks apa? (matriks ini TIDAK memiliki invers)',
    accept: ['singular', 'matriks singular'],
    explanation: 'Matriks dengan determinan nol disebut matriks singular, dan tidak memiliki invers karena rumus invers melibatkan pembagian dengan determinan.',
    hint: 'Ingat: rumus invers matriks 2×2 membagi dengan nilai determinan. Apa yang terjadi jika kita membagi dengan nol?',
    placeholder: 'Ketik jawabanmu',
  },
];

export function scoreConfidenceGap(pre, post) {
  return post - pre;
}
