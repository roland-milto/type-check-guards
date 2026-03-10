# areNumerics

## Katrangan

`areNumerics` mriksa apa sawijining nilai iku array sing ora kosong lan kabeh elemene numerik.

### Kahanan panggunaan

Gunakake `areNumerics` kanggo validasi data eksternal utawa tanpa tipe (contone payload JSON, parameter query, input
formulir) sadurunge ngitung jumlah, rata-rata, utawa operasi numerik liyane, supaya mesthekake input iku array numerik
sing ora kosong lan mbalekake `false` yen ora.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areNumerics` kanggo njaga input `unknown` sadurunge dianggep minangka array numerik; fungsi iki mbalekake
`false` kanggo sing dudu array lan kanggo array kosong.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing ora kosong lan saben elemene numerik.
- Gagal cepet: mandheg mriksa sakcepete nemu elemen sing ora numerik, banjur mbalekake `false`.
- Mbantu validasi input sing ora dingerteni kanthi aman sadurunge nindakake operasi numerik.

## Panggunaan

### Sintaks

Fungsi:

- `areNumerics(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine elemen numerik.

### Impor fungsi lokal

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // bener
console.log(areNumerics(b)); // bener
console.log(areNumerics(c)); // salah
console.log(areNumerics(d)); // salah
console.log(areNumerics(e)); // salah

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areNumerics(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 16:05:45 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>