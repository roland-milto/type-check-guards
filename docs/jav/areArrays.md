# areArrays

## Katrangan

`areArrays` nemtokake apa sawijining nilai iku larik rong dimensi sing kebak lan item-itemé kabèh larik.

### Kahanan panggunaan

Gunakna `areArrays` kanggo nvalidasi input tabular utawa kaya matriks (contone, baris CSV, data grid, utawa dhaptar sing
dikelompokake) sadurunge nindakake operasi baris/kolom; fungsi iki bakal mbalekake `false` yen input dudu larik, kosong,
utawa ngemot unsur sing dudu larik.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakna `areArrays` nalika sampeyan perlu mesthekake yen sawijining nilai iku larik 2D sing ora kosong lan saben baris
> iku larik sadurunge ngiterasi utawa ngindeks menyang larik bersarang.

### Kauntungan

- Nvalidasi manawa input iku larik rong dimensi sing ora kosong, ing ngendi saben unsur iku larik.
- Ngasilake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan metu luwih awal.
- Mbantu nyegah kesalahan runtime nalika kode sabanjure nganggep operasi larik bersarang (contone, mapping baris).

## Panggunaan

### Sintaks

Fungsi:

- `areArrays(array)`

Paramèter:

- `array`: Input sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // value iku larik 2D sing unsur-unsuré larik
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areArrays(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 13:40:06 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>