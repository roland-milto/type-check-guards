# isNull

## Katrangan

Nemtokake apa `value` sing diwenehake iku `null`.

### Kahanan panggunaan

Gunakake `isNull` kanggo validasi input utawa kolom payload API nalika `null` iku nilai sentinel sing nduweni teges lan
kudu ditangani beda karo `undefined` utawa nilai liyane.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isNull` nalika sampeyan perlu mbedakake `null` saka `undefined` lan nilai falsy liyane; fungsi iki mbalekake
`true` mung kanggo `null`.

### Kauntungan

- Nyedhiyakake pamriksan sing trep kanggo `null` tanpa nyampurake karo `undefined`.
- Bisa digunakake kanthi andal kanggo jinis input apa wae amarga nampa `unknown`.
- Gampang, cepet, lan ora nduweni efek samping; mung mbalekake `true` utawa `false`.

## Panggunaan

### Sintaks

Fungsi:

- `isNull(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa `null`.

### Impor fungsi lokal

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // bener
console.log(isNull(b)); // salah

if (isNull(a)) {
  // a iku null ing kene
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isNull(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isNull](../_analysis/isNull.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 15:39:37 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>