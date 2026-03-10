# areFloats

## Katrangan

`areFloats` mriksa apa sawijining array wis kebak lan kabeh elemene iku float.

### Kahanan panggunaan

Gunakake `areFloats` nalika sampeyan nampa `unknown[]` (umpamane saka JSON, parameter query, utawa API eksternal) lan
sampeyan kudu mesthekake yen iku array sing kebak lan saben iteme iku float sadurunge mlaku logika numerik kayata
ngitung rata-rata, interpolasi, utawa itungan statistik.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areFloats` kanggo njaga `unknown[]` sadurunge dianggep minangka `number[]` sing mung ngemot float; fungsi
> iki mbalekake `false` kanggo array kosong lan kanggo elemen apa wae sing dudu float.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing ora kosong lan saben elemene iku float.
- Gagal cepet: mbalekake `false` sakcepete ketemu elemen sing dudu float.
- Mbantu validasi input sing ora dingerteni sadurunge nindakake itungan khusus float.

## Panggunaan

### Sintaks

Fungsi:

- `areFloats(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine elemen float.

### Impor fungsi lokal

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // bener
console.log(areFloats(b)); // salah
console.log(areFloats(c)); // salah

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areFloats(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 15:57:57 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>