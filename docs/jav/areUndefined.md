# areUndefined

## Katrangan

`areUndefined` mriksa apa saben elemen ing array sing diwenehake iku `undefined`.

### Kahanan panggunaan

Validasi yen dhaptar asil opsional ora ngemot nilai nyata (mung `undefined`), contone sawise mapping lookup sing entri
sing ilang diwakili minangka `undefined`, lan sampeyan pengin mesthekake yen kabeh lookup gagal.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areUndefined` nalika sampeyan perlu negesake yen sawijining `unknown[]` mung ngemot nilai `undefined`;
> fungsi iki ngasilake `false` kanggo array kosong lan input sing dudu array/ora valid amarga ana pamriksan internal
`isFilledArray`.

### Kauntungan

- Ngasilake `false` kanggo sing dudu array lan array kosong amarga mbutuhake array sing kebak liwat `isFilledArray`.
- Njamin saben elemen iku `undefined`, ora mung sawetara, dadi maksude cetha.
- Migunani minangka predikat gaya-guard nalika validasi koleksi input sing ora dingerteni.

## Panggunaan

### Sintaks

Fungsi:

- `areUndefined(array)`

Paramèter:

- `array`: Array sing arep dipriksa kanggo elemen `undefined`.

### Impor fungsi lokal

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // bener
const r2 = areUndefined(b); // salah
const r3 = areUndefined(c); // salah

// Cathetan: mbalekake salah kanggo larik kosong
const r4 = areUndefined([]); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areUndefined(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:56:18 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>