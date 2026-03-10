# isIndexFound

## Katrangan

`isIndexFound` nemtokake apa nilai tartamtu iku integer sing ora negatif, sing nuduhake yen indeks ditemokake.

### Kahanan panggunaan

Validasi yen asil panelusuran makili indeks sing bisa digunakake (integer `>= 0`) sadurunge ngindeks menyang array utawa
string, supaya ora ora sengaja nggunakake `-1` utawa nilai sing dudu angka.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isIndexFound` sawise operasi kaya `indexOf`, `findIndex`, utawa panelusuran kustom nalika `-1` (utawa nilai
> ora sah liyane) bisa nuduhake “ora ditemokake”. Nalika mbalekake `true`, nilaine iku angka lan aman kanggo digunakake
> minangka indeks array/string.

### Kauntungan

- Nyedhiyakake type guard sing prasaja kanggo ndeteksi apa sawijining indeks ditemokake kanthi mriksa integer sing ora
  negatif.
- Mbalekake `true` mung kanggo nilai sing sah kaya indeks (integer `>= 0`), nolak nilai negatif, dudu integer, lan dudu
  angka.
- Mbantu ngindhari kesalahan off-by-one lan kesalahan nilai sentinel nalika nggarap API sing mbalekake `-1` kanggo “ora
  ditemokake”.

## Panggunaan

### Sintaks

Fungsi:

- `isIndexFound(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa iku integer sing ora negatif.

### Impor fungsi lokal

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx iku angka ing kene lan >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Panggunaan umum nganggo indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isIndexFound(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:46:27 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>