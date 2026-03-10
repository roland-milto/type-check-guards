# isEmpty

## Katrangan

Nemtokake apa sawijining nilai iku kosong, mbalekake `true` kanggo `null`, `undefined`, string kosong/isi spasi wae,
array kosong, `Map`/`Set` kosong, utawa objek sing ora nduweni properti enumerable dhewe.

### Kahanan panggunaan

Gunakna `isEmpty` kanggo validasi input lan ndeteksi nilai sing ilang/kosong ing macem-macem jinis data (contone kolom
formulir, payload API, objek konfigurasi) nalika `null`, `undefined`, string isi spasi wae, koleksi kosong, lan objek
tanpa properti kudu dianggep kosong.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isEmpty` iku utilitas sing mbalekake boolean (dudu type predicate TypeScript), mula ora nyepetake (narrow) tipe
> kanthi dhewe; gunakna kanggo validasi/percabangan tinimbang narrowing wektu kompilasi.

### Kauntungan

- Nganggep `null` lan `undefined` dadi `true` kanggo mriksa kekosongan.
- Nganggep string sing mung isi spasi iku kosong kanthi cara di-trim dhisik sadurunge mriksa dawane.
- Ndhukung jinis kontainer umum (array, `Map`, `Set`) lan objek polos sing ora nduweni properti enumerable dhewe.
- Ngindhari ngitung properti warisan kanthi nggunakake mriksa `hasOwnProperty`.
- Mbalekake asil boolean sing prasaja (`true`/`false`) sing cocog kanggo guard lan validasi.

## Panggunaan

### Sintaks

Fungsi:

- `isEmpty(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa kosong apa ora.

### Impor fungsi lokal

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isEmpty(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 16:19:05 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>