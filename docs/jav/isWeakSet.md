# isWeakSet

## Katrangan

Nemtokake apa `value` sing diwenehake iku `WeakSet` sing isine obyek.

### Kahanan panggunaan

Gunakake `isWeakSet` nalika nampa input tanpa tipe (contone, saka API eksternal, konfigurasi dinamis, utawa nilai
`unknown`) lan sampeyan kudu verifikasi manawa iku `WeakSet` sadurunge nggunakake operasi sing khusus kanggo `WeakSet`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isWeakSet` kanggo nyepetake (narrow) nilai `unknown` dadi `WeakSet<object>` nalika runtime; elinga yen
`WeakSet` mung bisa ngemot referensi obyek.

### Kauntungan

- Nyedhiyakake pamriksa runtime sing prasaja kanggo mriksa apa sawijining nilai iku `WeakSet`.
- Mbantu nyegah kesalahan tipe kanthi mesthekake mung instansi `WeakSet` sing dianggep kaya mangkono.
- Bisa digunakake karo input `unknown` apa wae lan mbalekake asil boolean sing cetha (`true`/`false`).

## Panggunaan

### Sintaks

Fungsi:

- `isWeakSet(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // bener
console.log(isWeakSet(b)); // salah

if (isWeakSet(a)) {
  // a iku WeakSet nalika runtime
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isWeakSet(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:15:14 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>