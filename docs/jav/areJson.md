# areJson

## Katrangan

Mriksa apa kabeh unsur ing sawijining array iku string JSON, mbalekake `true` mung yen array kebak lan saben item iku
JSON sing valid; yen ora mbalekake `false`.

### Kahanan panggunaan

Validasi data mlebu (contone, saka query params, variabel lingkungan, utawa API eksternal) nalika sampeyan ngarep-arep
array saka string sing di-encode JSON lan pengin nolak array kosong utawa entri apa wae sing dudu JSON.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areJson` nalika sampeyan perlu validasi yen `unknown[]` mung ngemot string JSON sadurunge diparse (contone,
> nganggo `JSON.parse`).

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku string JSON sing valid; yen ora mbalekake `false`.
- Gagal cepet: mandheg mriksa sakcepete nemokake unsur sing dudu JSON.
- Miturut rancangan nolak array kosong, mbalekake `false` kanggo input sing ora kebak.

## Panggunaan

### Sintaks

Fungsi:

- `areJson(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine unsur string JSON.

### Impor fungsi lokal

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // bener
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // salah
const empty = areJson([]); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areJson(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areJson](../_analysis/areJson.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 16:16:20 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>