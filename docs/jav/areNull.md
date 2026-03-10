# areNull

## Katrangan

Mriksa apa kabeh unsur ing `array` sing diwènèhaké iku `null`.

### Kahanan panggunaan

Validasi yen kolom dataset, dhaptar field API, utawa array placeholder mung ngemot nilai `null` sadurunge ngetrapake
logika sing nganggep kabeh entri pancèn disengaja kosong.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakna `areNull` nalika kowe butuh mriksa kanthi ketat yen input iku array sing ora kosong lan saben unsur persis
`null` (dudu `undefined`, dudu nilai falsy).

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku `null`, dadi penjaga “kabeh cocog” sing ketat.
- Nolak input sing dudu array lan array kosong kanthi mbalekake `false`, supaya ora ana asil truthy sing ora disengaja
  saka input sing ora valid.
- Cocog kanggo mriksa prasyarat sadurunge ngolah data sing kudu kabeh `null`.

## Panggunaan

### Sintaks

Fungsi:

- `areNull(array)`

Paramèter:

- `array`: Array input sing arep dipriksa apa unsur-unsuré `null`.

### Impor fungsi lokal

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // bener
const allNullB = areNull(b); // salah

const notAnArray = areNull(123 as unknown as unknown[]); // salah
const empty = areNull([]); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areNull(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areNull](../_analysis/areNull.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 15:43:44 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>