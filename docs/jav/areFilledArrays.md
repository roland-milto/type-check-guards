# areFilledArrays

## Katrangan

`areFilledArrays` mriksa apa larik rong dimensi ora kosong lan kabeh sublarike ora kosong.

### Kahanan panggunaan

Gunakake `areFilledArrays` kanggo nvalidasi input tabular utawa kaya matriks (contone baris CSV, data grid, asil sing
dikelompokake) supaya sampeyan bisa kanthi aman nganggep ana paling ora siji sublarik lan ora ana sublarik sing kosong.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areFilledArrays` nalika sampeyan perlu mesthekake larik 2D nduweni paling ora siji baris lan saben baris
> nduweni paling ora siji elemen sadurunge ngiterasi utawa ngindeks menyang larik kasebut.

### Kauntungan

- Nvalidasi yen larik njaba ora kosong lan saben larik njero uga ora kosong, mbalekake `true` mung yen loro kahanan
  kasebut ketemu.
- Bisa digunakake kanggo jinis elemen apa wae ing njero sublarik (contone angka, string, objek, larik bersarang) amarga
  mung mriksa status “kebak” larik, dudu isi elemene.
- Nyedhiyakake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard sadurunge ngolah data rong dimensi.

## Panggunaan

### Sintaks

Fungsi:

- `areFilledArrays(array)`

Paramèter:

- `array`: Larik rong dimensi sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // bener
console.log(areFilledArrays(b)); // bener
console.log(areFilledArrays(c)); // bener
console.log(areFilledArrays(d)); // salah
console.log(areFilledArrays(e)); // salah
console.log(areFilledArrays(f)); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areFilledArrays(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 11:57:17 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>