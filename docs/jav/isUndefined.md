# isUndefined

## Katrangan

Mriksa apa sawijining nilai iku `undefined`.

### Kahanan panggunaan

Gunakake `isUndefined` kanggo njaga input opsional, ndeteksi properti sing ilang, utawa mbedakake antarane “ora
diwenehake” (`undefined`) lan “kosong kanthi eksplisit” (`null`).

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isUndefined` nalika sampeyan pancen perlu ndeteksi `undefined` (dudu `null`). Iki aman amarga gumantung
> marang `typeof value === "undefined"`.

### Kauntungan

- Nyedhiyakake pamriksan sing cetha lan eksplisit kanggo `undefined` nganggo `typeof`, supaya ora kena kasus pinggiran
  karo variabel sing durung dideklarasikake.
- Ngasilake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard, branching, lan logika validasi.
- Mbantu mbedakake `undefined` saka nilai “kosong” liyane kaya `null`, `0`, `""`, utawa `NaN`.

## Panggunaan

### Sintaks

Fungsi:

- `isUndefined(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x iku undefined ing kene
} else {
  // x ora undefined ing kene
}

const a = isUndefined(undefined); // bener
const b = isUndefined(null);      // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isUndefined(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:03:09 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>