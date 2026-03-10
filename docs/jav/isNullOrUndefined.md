# isNullOrUndefined

## Katrangan

Mriksa apa sawijining nilai iku `null` utawa `undefined`.

### Kahanan panggunaan

Gunakake `isNullOrUndefined` nalika sampeyan perlu nganggep loro-lorone `null` lan `undefined` minangka “ora ana nilai”,
kayata kanggo validasi input opsional, normalisasi payload API, utawa njaga jalur kode sadurunge nindakake dereference
marang nilai sing bisa wae ora ana.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isNullOrUndefined` kanggo njaga saka nilai sing ilang sadurunge ngakses properti utawa nelpon metode; fungsi
> iki mung mbalekake `true` kanggo `null` lan `undefined`.

### Kauntungan

- Nyedhiyakake guard sing cetha lan bisa digunakake maneh kanggo ndeteksi `null` lan `undefined` ing siji panggonan.
- Ngasilake boolean prasaja (`true`/`false`) sing gampang digabung ing kondisi lan validasi.
- Mbantu ngindhari kesalahan runtime sing umum kanthi mriksa nilai sing ilang sadurunge ngakses properti utawa nelpon
  metode.

## Panggunaan

### Sintaks

Fungsi:

- `isNullOrUndefined(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa `null` utawa `undefined`.

### Impor fungsi lokal

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // nangani nilai sing ilang
}

console.log(isNullOrUndefined(b)); // bener
console.log(isNullOrUndefined(c)); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isNullOrUndefined(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:34:08 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>