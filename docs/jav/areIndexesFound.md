# areIndexesFound

## Katrangan

`areIndexesFound` mriksa apa sawijining nilai iku array sing ora kosong lan elemene kabeh indeks sing valid, banjur
mbalekake `true` yen iya lan `false` yen ora.

### Kahanan panggunaan

Validasi data saka pangguna utawa saka njaba (contone, JSON sing wis diparse) sing dikarepake dadi dhaptar indeks
sadurunge digunakake kanggo ngakses utawa nylice array.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areIndexesFound` kanggo validasi input sing ora dingerteni sadurunge nganggep elemene minangka indeks array;
> fungsi iki mbalekake `false` kanggo array kosong lan kanggo array sing ngemot nilai sing dudu indeks.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing kebak lan saben elemene iku indeks sing valid.
- Gagal cepet: mbalekake `false` sakcepete ketemu elemen sing dudu indeks.
- Migunani minangka penjaga sadurunge nggunakake nilai minangka posisi utawa offset array.

## Panggunaan

### Sintaks

Fungsi:

- `areIndexesFound(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa manut aturan indeks.

### Impor fungsi lokal

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // bener
console.log(areIndexesFound(b)); // salah
console.log(areIndexesFound(c)); // salah

if (areIndexesFound(a)) {
  // Ing kene, `a` wis dipesthekake dadi larik indeks sing wis kebak.
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areIndexesFound(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:42:18 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>