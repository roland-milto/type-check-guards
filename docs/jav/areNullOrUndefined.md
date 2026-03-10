# areNullOrUndefined

## Katrangan

Mriksa apa kabeh unsur ing array sing diwenehake iku `null` utawa `undefined`.

### Kahanan panggunaan

Validasi manawa dhaptar kolom opsional ora ngemot nilai nyata (mung `null`/`undefined`) sadurunge mutusake kanggo
ngliwati pangolahan utawa kanggo nampilake kahanan “ora ana nilai sing diwenehake”.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areNullOrUndefined` nalika sampeyan perlu mriksa manawa sawijining array mung ngemot nilai sing ilang (
`null`/`undefined`). Elinga yen fungsi iki mbalekake `false` kanggo array kosong.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku `null` utawa `undefined`.
- Mbalekake `false` kanggo array kosong, mbantu mbedakake “ora ana data” saka “kabeh nilai ilang”.
- Bisa digunakake karo `unknown[]`, dadi aman kanggo digunakake sadurunge nyepetake (narrowing) tipe.

## Panggunaan

### Sintaks

Fungsi:

- `areNullOrUndefined(array)`

Paramèter:

- `array`: Array sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areNullOrUndefined(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:30:03 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>