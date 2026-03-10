# areOfType

## Katrangan

Mriksa apa kabeh unsur ing `array` sing diwenehake iku saka `type` sing ditemtokake.

### Kahanan panggunaan

Gunakake `areOfType` kanggo nvalidasi input sing ora dingerteni (contone JSON sing diparse, payload API, input pangguna)
sadurunge nindakake operasi sing gumantung tipe marang saben unsur ing sawijining array.

> **Cathetan kanggo pangguna TypeScript:**
>
> Amarga `areOfType` iku type guard, TypeScript bakal nyepetake (narrow) array ing njero blok `if (areOfType(...)) {}`
> dadi `Array<DataTypeOf<T>>`.

### Kauntungan

- Nyedhiyakake type guard TypeScript: nalika mbalekake `true`, inpute dadi luwih spesifik dadi `Array<DataTypeOf<T>>`.
- Nvalidasi saben unsur marang tipe runtime sing dijaluk, supaya array campuran tipe ora bisa lolos.
- Gagal cepet: mbalekake `false` sakcepete nemokake unsur sing ora cocog.
- Nolak sing dudu array lan array kosong miturut rancangan (gumantung marang `isFilledArray`).

## Panggunaan

### Sintaks

Fungsi:

- `areOfType(array, type)`

Paramèter:

- `array`: Array sing arep dipriksa.
- `type`: Tipe sing arep dicek marang saben unsur ing array.

### Impor fungsi lokal

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values saiki number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // palsu

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areOfType(array, type)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 17:09:57 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>