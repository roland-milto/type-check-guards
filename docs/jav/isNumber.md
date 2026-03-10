# isNumber

## Katrangan

`isNumber` mriksa apa sawijining nilai iku angka sing finite lan dudu `NaN`.

### Kahanan panggunaan

Validasi input numerik saka sumber sing ora dipercaya (form, parameter query, payload JSON) sadurunge perhitungan,
panyimpenan, utawa mriksa rentang, supaya mung angka finite sing lolos (`true`) lan liyane kabeh mbalekake `false`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isNumber` kanggo validasi nilai `unknown` sadurunge nindakake aritmetika; fungsi iki nolak `NaN`,
`Infinity`, lan `-Infinity`.

### Kauntungan

- Mbalekake `true` mung kanggo angka JavaScript sing bener (mriksa tipe plus nolak `NaN` lan infinity).
- Nyegah bug validasi sing umum nalika `NaN`, `Infinity`, utawa `-Infinity` ora sengaja lolos minangka angka.
- Cocog kanggo guard runtime kanggo input sing ora dingerteni (umpamane JSON, input pangguna, API eksternal).
- Gampang, cepet, lan tanpa efek samping.

## Panggunaan

### Sintaks

Fungsi:

- `isNumber(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input iku angka winates sing sah
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isNumber(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:09:32 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>