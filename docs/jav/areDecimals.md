# areDecimals

## Katrangan

Mriksa apa kabeh elemen ing sawijining array iku angka desimal lan array kasebut kebak, banjur mbalekake `true` utawa
`false`.

### Kahanan panggunaan

Validasi dhaptar sing diwenehake pangguna (contone, kolom CSV utawa input formulir) kanggo njamin array ora kosong lan
saben entri iku nilai desimal sadurunge diparse utawa kanggo perhitungan.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areDecimals` yen sampeyan butuh cek boolean cepet yen sawijining `unknown[]` ora kosong lan saben elemene
> minangka representasi desimal.

### Kauntungan

- Njamin input iku array sing wis kebak sadurunge validasi item, supaya ora kleru nampa dhaptar kosong.
- Ngevalidasi saben elemen nganggo `isDecimal`, mula nilai campuran utawa ora valid bakal langsung ngasilake `false`.
- Nyedhiyakake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan alur validasi early-return.

## Panggunaan

### Sintaks

Fungsi:

- `areDecimals(array)`

Paramèter:

- `array`: Array sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // bener
console.log(areDecimals(b)); // salah
console.log(areDecimals(c)); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areDecimals(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 15:57:39 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>