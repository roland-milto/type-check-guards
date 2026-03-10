# areBigInts

## Katrangan

`areBigInts` nemtokake apa sawijining nilai iku array ora kosong sing isine mung nilai `bigint` wae.

### Kahanan panggunaan

Validasi input sing ora dingerteni (contone, data kaya JSON sing wis diparse, payload API, utawa parameter fungsi sing
ditipe `unknown`) kanggo mesthekake iku array ora kosong saka nilai `bigint` sadurunge diproses; mbalekake `true` mung
yen kabeh unsur iku `bigint`, yen ora `false`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areBigInts` minangka guard runtime sadurunge nindakake operasi sing mung kanggo `bigint` (contone,
> aritmetika, pambandhingan) marang input sing ora dingerteni.

### Kauntungan

- Njamin saben unsur iku `bigint`, lan mung mbalekake `true` yen sakabehe array cocog.
- Miturut rancangan, nolak sing dudu array lan array kosong (liwat `isFilledArray`), supaya ora keliru nampa input sing
  ora valid.
- Gagal cepet: mbalekake `false` sakcepete nemu unsur sing dudu `bigint`.

## Panggunaan

### Sintaks

Fungsi:

- `areBigInts(array)`

Paramèter:

- `array`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // bener
console.log(areBigInts(b)); // salah
console.log(areBigInts(c)); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areBigInts(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:26:18 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>