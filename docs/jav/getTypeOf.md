# getTypeOf

## Katrangan

`getTypeOf` mbalekake label jinis sing rinci lan gampang diwaca manungsa kanggo sawijining nilai, kalebu jinis numerik
sing luwih dipérinci lan jinis obyek tartamtu.

### Kahanan panggunaan

Gunakake `getTypeOf` kanggo nyeragamakake deteksi jinis ing validasi input lan diagnostik—umpamane, kanggo nolak `nan`,
nampa mung ID `integer`, nambani string numerik kaya `decimal` kanthi beda tinimbang `string` biasa, utawa kanggo nglog
jinis obyek sing luwih pas kaya `date` lan `regexp`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Jinis baliannya yaiku `DataTypeAsString | string`. Anggep iki minangka label deskriptif; bandhingna karo literal sing
> wis dikenal kaya `integer`, `float`, `nan`, `array`, `null`, lan `undefined` nalika nggawe cabang logika.

### Kauntungan

- Ngasilake string jinis sing luwih rinci tinimbang `typeof`-e JavaScript, kalebu subtipe numerik kaya `integer`,
  `float`, lan `nan`.
- Mbedakake `null` lan `undefined` kanthi cetha minangka `null` lan `undefined`.
- Ndeteksi format string numerik sing umum lan nglaporake minangka `binary`, `octal`, `decimal`, utawa `hexadecimal`
  tinimbang mung `string`.
- Ngenali array minangka `array` lan nggunakake `Object.prototype.toString` kanggo nyedhiyakake jeneng jinis obyek sing
  spesifik (contone, `date`, `regexp`, `map`, `set`).
- Migunani kanggo validasi, logging, lan debugging nalika dibutuhake label jinis sing konsisten lan gampang diwaca
  manungsa.

## Panggunaan

### Sintaks

Fungsi:

- `getTypeOf(value)`

Paramèter:

- `value`: Nilai sing arep ditemtokake jinise data.

### Impor fungsi lokal

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// Priksa conto
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.getTypeOf(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 13:07:10 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>