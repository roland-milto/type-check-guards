# isArray

## Katrangan

`isArray` mriksa apa sawijining nilai iku array lan mbalekake `true` yen iya, yen ora `false`.

### Kahanan panggunaan

Validasi data sing ora dingerteni (contone, JSON sing wis diparse utawa respons API) kanggo mesthekake yen sawijining
nilai iku array sadurunge ngiterasi, ngindeks, utawa ngakses `.length`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isArray` nalika sampeyan butuh pamriksan runtime kanggo array; fungsi iki mbalekake boolean lan aman kanggo
> diundang nganggo nilai `unknown`.

### Kauntungan

- Nggunakake `Array.isArray` sing wis ana kanggo ndeteksi array kanthi andal ing macem-macem realm (contone, iframe).
- Ngasilake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan logika percabangan.
- Bisa digunakake karo jinis input apa wae amarga parametere `unknown`.

## Panggunaan

### Sintaks

Fungsi:

- `isArray(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input iku sawijining larik nalika runtime
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isArray(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isArray](../_analysis/isArray.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 11:30:56 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>