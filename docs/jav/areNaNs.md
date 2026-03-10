# areNaNs

## Katrangan

`areNaNs` mriksa apa kabeh unsur ing sawijining array iku `NaN` lan mbalekake `true` mung yen saben unsur iku `NaN`.

### Kahanan panggunaan

Validasi data mlebu nalika `NaN` digunakake minangka nilai sentinel lan sampeyan kudu mesthekake yen sakabehing array
kasusun mung saka `NaN` (contone, ndeteksi seri angka sing kabeh ilang).

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakna `areNaNs` nalika sampeyan perlu validasi yen sawijining array mung ngemot nilai numerik `NaN` (tanpa koersi
> string-dadi-angka).

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku `NaN` (pemeriksaan ketat kabeh unsur).
- Ora nindakake koersi string dadi angka; nilai kaya "NaN" tetep dudu `NaN` lan nggawe asil dadi `false`.
- Mbalekake `false` kanggo array sing ora kebak/ora diisi, nyegah `true` sing ora disengaja nalika input kosong.

## Panggunaan

### Sintaks

Fungsi:

- `areNaNs(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa ngemot nilai `NaN`.

### Impor fungsi lokal

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // bener
const b = areNaNs([NaN, 1, NaN]); // salah
const c = areNaNs([NaN, "NaN", NaN]); // salah
const d = areNaNs([NaN, null, NaN]); // salah
const e = areNaNs([] as unknown[]); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areNaNs(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 15:51:55 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>