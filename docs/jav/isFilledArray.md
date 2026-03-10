# isFilledArray

## Katrangan

Mriksa apa `value` iku array sing nduwèni paling ora siji elemen, banjur mbalekaké `true` utawa `false`.

### Kahanan panggunaan

Gunakna `isFilledArray` kanggo validasi data sing mlebu (contone payload API, nilai formulir, konfigurasi) sadurunge
ngiterasi, ngakses elemen pisanan, utawa ngetrapaké logika sing mbutuhaké paling ora siji item.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isFilledArray` iku guard runtime sing mbalekaké boolean; ora nyepetaké (narrow) jinis elemen luwih adoh kajaba mung
> mastèkaké array iku ora kosong.

### Kauntungan

- Priksa prasaja lan cepet kanggo array sing ora kosong nganggo `Array.isArray` lan priksa dawa (length).
- Mbantu nyegah kesalahan runtime nalika kode nganggep array nduwèni paling ora siji elemen.
- Asil boolean sing cetha: mbalekaké `true` kanggo array sing ora kosong lan `false` kanggo liyane.

## Panggunaan

### Sintaks

Fungsi:

- `isFilledArray(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa iku array sing ora kosong.

### Impor fungsi lokal

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input iku larik sing ora kosong nalika runtime
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isFilledArray(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 11:47:36 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>