# arePlainObjects

## Katrangan

Mriksa apa kabeh unsur saka sawijining array iku obyek polos, mbalekake `true` mung yen saben unsur nyukupi.

### Kahanan panggunaan

Validasi data eksternal utawa tanpa tipe (contone, JSON sing wis diparse, payload API, kiriman formulir) kanggo
mesthekake sampeyan nampa array sing ora kosong lan saben entri iku obyek polos sadurunge diiterasi lan maca properti.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `arePlainObjects` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka
`Record<string, unknown>[]` (utawa wujud obyek sing luwih ketat) ing TypeScript.

### Kauntungan

- Njamin saben unsur ing array input iku obyek polos, mbalekake `true` mung yen kabeh item cocog.
- Nolak input sing ora valid luwih awal (dudu array utawa array kosong) kanthi mbalekake `false`.
- Nganggep loro-lorone obyek literal lan obyek `Object.create(null)` minangka obyek polos sing valid.

## Panggunaan

### Sintaks

Fungsi:

- `arePlainObjects(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine unsur obyek polos.

### Impor fungsi lokal

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // bener
const b = arePlainObjects([{}, Object.create(null)]); // bener
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // salah
const d = arePlainObjects([] as unknown[]); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.arePlainObjects(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 16:25:47 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>