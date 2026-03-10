# areBinaries

## Katrangan

Mriksa apa nilai sing diwènèhaké iku larik sing ora kosong saka string biner sing valid lan mung mbalèkaké `true` yen
kabèh item lulus validasi.

### Kahanan panggunaan

Gunakna `areBinaries` nalika nampa dhaptar sing ora dingertèni (umpamané saka JSON, formulir, utawa API) lan kudu njamin
yèn iku larik string biner sing ora kosong sadurungé diparsing utawa diproses.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakna `areBinaries` kanggo mvalidasi input sing ora dingertèni sadurungé ngowahi string biner dadi angka/BigInt; iki
> njamin larik ora kosong lan saben unsur iku string biner sing valid.

### Kauntungan

- Nvalidasi manawa sawijining nilai iku larik sing ora kosong lan saben unsuré iku string biner sing valid.
- Ngasilaké asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard, early return, lan validasi input.
- Nyegah kesalahan parsing ing tahap sabanjuré kanthi nolak larik sing ngemot entri sing dudu biner.

## Panggunaan

### Sintaks

Fungsi:

- `areBinaries(array)`

Paramèter:

- `array`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // bener
console.log(areBinaries(b)); // salah
console.log(areBinaries([])); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areBinaries(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:14:55 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>