# isWeakMap

## Katrangan

Nemtokake apa `value` tartamtu iku sawijining instansi `WeakMap`.

### Kahanan panggunaan

Gunakake `isWeakMap` nalika sampeyan nampa nilai `unknown` (contone, saka API publik, sistem plugin, utawa konfigurasi
dinamis) lan kudu verifikasi manawa iku `WeakMap` sadurunge nggunakake prilaku sing khusus kanggo `WeakMap`.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isWeakMap` nindakake pamriksan `instanceof WeakMap`; iki guard runtime sing mbalekake `true` mung kanggo instansi
`WeakMap` sing nyata.

### Kauntungan

- Mriksani runtime sing prasaja kanggo ngerti apa sawijining nilai iku `WeakMap`.
- Mbantu nyegah panggunaan API sing mbutuhake `WeakMap` kanthi mbalekake `true`/`false` tinimbang mbuwang error.
- Bisa digunakake karo input `unknown`, dadi trep ing wates modul (contone, parsing, data eksternal, utawa kode tanpa
  tipe).

## Panggunaan

### Sintaks

Fungsi:

- `isWeakMap(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a iku WeakMap nalika runtime
}

console.log(isWeakMap(a)); // bener
console.log(isWeakMap(b)); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isWeakMap(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:25:29 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>