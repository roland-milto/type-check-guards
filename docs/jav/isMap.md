# isMap

## Katrangan

Mriksani apa `value` sing diwenehake iku `Map`, mbalekake `true` yen iya lan `false` yen ora.

### Kahanan panggunaan

Gunakna `isMap` nalika kowe nampa nilai `unknown` (umpamane saka parsing JSON, API eksternal, utawa input pangguna) lan
kudu mesthekake yen iku `Map` sadurunge nindakake operasi `Map`.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isMap` iku guard runtime sing mbalekake `true` nalika nilaine iku `Map` lan `false` yen ora; gunakna kanggo
> nyepetake (narrow) `unknown` sadurunge nelpon API `Map`.

### Kauntungan

- Nyedhiyakake pamriksa runtime sing cepet kanggo mriksa apa sawijining nilai iku `Map`.
- Mbantu nyegah kesalahan tipe kanthi njaga jalur kode sing mbutuhake metode `Map` kaya `get`, `set`, lan `has`.
- Cocog minangka langkah validasi sing entheng nalika nangani input `unknown`.

## Panggunaan

### Sintaks

Fungsi:

- `isMap(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isMap(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isMap](../_analysis/isMap.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 16:04:57 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>