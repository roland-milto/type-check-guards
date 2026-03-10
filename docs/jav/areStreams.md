# areStreams

## Katrangan

`areStreams` nemtokake apa sawijining nilai iku array sing kebak lan saben elemene iku `Stream`.

### Kahanan panggunaan

Validasi koleksi sing diwenehake pangguna utawa sing dibangun kanthi dinamis (contone, sawetara file read stream)
sadurunge dipipe, di-resume, utawa dioperasikake bareng minangka sawijining grup.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areStreams` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka `Stream[]`; fungsi iki
> mung mbalekake `true` yen nilaine iku array sing ora kosong lan saben elemene iku `Stream`.

### Kauntungan

- Njamin manawa input iku array sing kebak lan saben elemene iku `Stream`.
- Nyedhiyakake guard `true`/`false` sing prasaja kanggo validasi koleksi stream sadurunge diproses.
- Gagal kanthi cepet: mbalekake `false` sakcepete nemokake elemen sing dudu `Stream`.
- Mbantu nyegah kesalahan runtime nalika kode nganggep kabeh item iku instans `Stream`.

## Panggunaan

### Sintaks

Fungsi:

- `areStreams(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine obyek Stream.

### Impor fungsi lokal

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input iku larik sing kebak obyek Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areStreams(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:34:17 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>