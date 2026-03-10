# isBuffer

## Katrangan

Mriksa apa sawijining nilai iku `Buffer` Node.js lan ngasilake `true` utawa `false`.

### Kahanan panggunaan

Validasi input nalika runtime (umpamane payload API, data berkas, utawa buffer pesen) kanggo mesthekake yen sawijining
nilai iku `Buffer` sadurunge diproses, lan kanthi andal entuk `false` nalika mlaku ing njaba Node.js sing `Buffer` bisa
wae ora ana.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isBuffer` kanggo nyepetake nilai `unknown` dadi `Buffer` sadurunge nelpon metode sing khusus kanggo Buffer.

### Kauntungan

- Ndeteksi instans `Buffer` Node.js kanthi aman nganggo `Buffer.isBuffer`.
- Ngasilake `false` ing lingkungan sing `Buffer` ora kasedhiya, supaya ora ana kesalahan runtime.
- Bisa digunakake karo input `unknown`, mula cocog kanggo validasi runtime lan nyepetake jinis (type narrowing).

## Panggunaan

### Sintaks

Fungsi:

- `isBuffer(value)`

Paramèter:

- `value`: Nilai sing arep dites.

### Impor fungsi lokal

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // bener
console.log(isBuffer(b)); // salah

if (isBuffer(a)) {
  // a iku Buffer ing kene
  console.log(a.toString("utf8"));
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isBuffer(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 16:32:03 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>