# areFalse

## Katrangan

`areFalse` mriksa apa kabeh unsur ing array sing diwenehake iku kanthi ketat boolean `false`.

### Kahanan panggunaan

Validasi yen dhaptar feature flag, pamriksa, utawa asil guard kabeh `false` sadurunge nerusake (contone, mesthekake yen
ora ana kahanan sing ngalangi).

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areFalse` nalika sampeyan butuh validasi ketat yen sawijining array ora kosong lan mung ngemot nilai boolean
`false`.

### Kauntungan

- Njamin saben unsur iku kanthi ketat `false` (tanpa koersi truthy/falsey).
- Ngasilake `false` kanggo sing dudu array utawa array kosong amarga mbutuhake array sing kebak liwat `isFilledArray`.
- Mandheg luwih awal ing unsur pisanan sing dudu `false` kanggo efisiensi.

## Panggunaan

### Sintaks

Fungsi:

- `areFalse(array)`

Paramèter:

- `array`: Array sing arep dipriksa, ngemot unsur saka jinis apa wae.

### Impor fungsi lokal

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // bener
const b = areFalse([false, true, false]);  // salah
const c = areFalse([false, "false", false]); // salah
const d = areFalse([]); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areFalse(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 16:17:31 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>