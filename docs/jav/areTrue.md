# areTrue

## Katrangan

Mriksa apa sawijining array sing ora kosong mung ngemot nilai boolean `true` wae.

### Kahanan panggunaan

Gunakake `areTrue` kanggo validasi yen sakumpulan prasyarat utawa feature flag kabeh aktif (kabeh nilaine `true`)
sadurunge nerusake, nalika nganggep input kosong utawa cacat minangka ora keturutan (`false`).

> **Cathetan kanggo pangguna TypeScript:**
>
> `areTrue` mbalekake `false` kanggo array kosong lan kanggo array sing ngemot nilai apa wae sing ora kanthi ketat
`true`.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku kanthi ketat `true` lan array ora kosong.
- Gagal cepet: mbalekake `false` sakcepete nemokake nilai sing dudu `true`.
- Nolak input sing ora valid (dudu array utawa array kosong) kanthi mbalekake `false`.

## Panggunaan

### Sintaks

Fungsi:

- `areTrue(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa kabeh nilaine `true`.

### Impor fungsi lokal

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areTrue(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:51:36 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>