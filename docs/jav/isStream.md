# isStream

## Katrangan

`isStream` mriksa apa sawijining nilai iku obyek stream (kaya stream ing Node.js, `ReadableStream`, utawa
`WritableStream`).

### Kahanan panggunaan

Validasi input sing bisa wae obyek biasa utawa stream (umpamane unggahan berkas, body HTTP, utawa pipeline pangolahan)
lan gawe logika percabangan adhedhasar apa nilaine iku stream.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isStream` kanggo nyepetake tipe `unknown` sadurunge nelpon metode stream; iki ngenali obyek sing kaya stream
> ing Node.js (liwat `pipe`/`on`) lan Web Streams (`ReadableStream`/`WritableStream`) nalika global kasebut ana.

### Kauntungan

- Ndeteksi kanthi aman obyek sing umum kaya stream ing Node.js kanthi mriksa ana fungsi `pipe` lan `on`.
- Uga ndhukung Web Streams kanthi ngenali `ReadableStream` lan `WritableStream` yen kasedhiya.
- Ngasilake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan logika percabangan.

## Panggunaan

### Sintaks

Fungsi:

- `isStream(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream iku kaya stream; sampeyan bisa nganggo API stream umum kanthi aman
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isStream(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isStream](../_analysis/isStream.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:40:30 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>