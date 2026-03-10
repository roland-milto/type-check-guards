# arePrimitives

## Katrangan

`arePrimitives` ngevaluasi apa kabeh unsur ing larik sing diwenehake lan ora kosong iku kalebu jinis primitif.

### Kahanan panggunaan

Validasi manawa data sing mlebu (contone, parameter query, nilai baris CSV, utawa dhaptar ID/tag) mung ngemot nilai
primitif sadurunge diserialisasi, di-hash, di-log, utawa dikirim menyang API sing ora kena nampa obyek.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `arePrimitives` nalika sampeyan kudu mesthekake yen `unknown[]` mung ngemot nilai primitif (string, number,
> bigint, boolean, symbol, undefined, utawa null) sadurunge diproses luwih lanjut.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku nilai primitif, dadi penjaga ketat kanggo larik “tanpa obyek/fungsi”.
- Gagal cepet: mbalekake `false` sakcepete nemokake unsur sing dudu primitif.
- Uga mbalekake `false` kanggo sing dudu larik lan larik kosong (liwat pamriksa larik sing kebak), supaya ora ora
  sengaja nampa input sing ora valid.

## Panggunaan

### Sintaks

Fungsi:

- `arePrimitives(array)`

Paramèter:

- `array`: Larik sing arep dipriksa apa unsur-unsuré kalebu jinis primitif.

### Impor fungsi lokal

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // bener
const r2 = arePrimitives(b); // bener
const r3 = arePrimitives(c); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.arePrimitives(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:05:06 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>