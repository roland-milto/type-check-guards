# isBinary

## Katrangan

`isBinary` nemtokaké apa sawijining nilai iku string biner (opsional nganggo prefiks `0b`/`0B`) lan mbalèkaké `true`
utawa `false`.

### Kahanan panggunaan

Validasi string sing diwènèhaké pangguna (umpamané kolom formulir, argumen CLI, nilai konfigurasi) kanggo mesthèkaké yèn
mung makili digit biner waé, opsional nganggo prefiks `0b`/`0B`, sadurunge diproses luwih lanjut.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakna `isBinary` minangka type guard sadurunge ngurai utawa ngowahi string dadi `BigInt`/`Number` supaya ora ana
> input sing ora valid.

### Kauntungan

- Nampa string biner nganggo utawa tanpa prefiks `0b`/`0B`.
- Nolak string kosong lan string sing nduwèni spasi ing ngarep/mburi (ASCII ≤ 32).
- Mbalèkaké `true`/`false` tanpa mbuwang error, dadi aman kanggo input sing durung mesthi.

## Panggunaan

### Sintaks

Fungsi:

- `isBinary(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // bener
const b = isBinary("1010");   // bener
const c = isBinary("0b1020"); // salah
const d = isBinary(0b1010);     // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isBinary(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:10:15 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>