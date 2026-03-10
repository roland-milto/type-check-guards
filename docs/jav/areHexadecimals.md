# areHexadecimals

## Katrangan

Mriksa apa kabeh unsur ing sawijining array iku string heksadesimal, mbalekake `true` mung kanggo array sing ora kosong
lan saben itemé valid.

### Kahanan panggunaan

Gunakake `areHexadecimals` kanggo mvalidasi input pangguna utawa data eksternal (contone, ID, checksum, kode warna tanpa
awalan '#') sadurunge nindakake parsing heksadesimal utawa pangolahan luwih lanjut.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areHexadecimals` kanggo mvalidasi input sing durung dingerteni sadurunge parsing utawa ngowahi nilai (
> umpamane, sadurunge `parseInt(value, 16)` utawa konversi BigInt).

### Kauntungan

- Nvalidasi yen saben unsur iku string heksadesimal lan mbalekake `true` mung yen kabeh item cocog.
- Nolak array kosong miturut rancangan, mbalekake `false` yen data input ora ana.
- Nyedhiyakake asil boolean prasaja (`true`/`false`) sing cocog kanggo guard lan validasi early-return.

## Panggunaan

### Sintaks

Fungsi:

- `areHexadecimals(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine unsur string heksadesimal.

### Impor fungsi lokal

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areHexadecimals(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:06:37 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>