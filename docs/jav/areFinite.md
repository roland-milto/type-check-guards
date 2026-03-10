# areFinite

## Katrangan

`areFinite` mriksa apa sawijining nilai iku array sing ora kosong sing elemene kabeh angka finite, mbalekake `true` yen
iya lan `false` yen ora.

### Kahanan panggunaan

Validasi array input numerik (umpamane, seri chart, dhaptar koordinat, sampel pangukuran) sadurunge nindakake
perhitungan, supaya asil `true` mung nalika kabeh nilaine angka finite.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areFinite` nalika sampeyan perlu mesthekake array ora kosong lan mung ngemot angka finite; fungsi iki
> mbalekake `false` kanggo array kosong lan kanggo array sing ngemot `NaN` utawa infinity.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing ora kosong lan saben elemene angka finite.
- Nolak `Infinity`, `-Infinity`, lan `NaN` kanthi ngandelake pamriksan `isFinite` kanggo saben elemen.
- Nyedhiyakake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan alur validasi.

## Panggunaan

### Sintaks

Fungsi:

- `areFinite(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa kabeh elemene finite.

### Impor fungsi lokal

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // bener
console.log(areFinite(b)); // salah
console.log(areFinite(c)); // salah

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areFinite(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 16:35:25 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>