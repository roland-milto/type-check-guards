# isFloat

## Katrangan

`isFloat` nemtokake apa `value` tartamtu iku angka floating-point sing winates (yaiku `number` sing dudu bilangan
bulat).

### Kahanan panggunaan

Validasi input numerik saka pangguna nalika nilai pecahan dibutuhake (contone rega, pangukuran, tarif) lan nolak
bilangan bulat, `NaN`, lan angka tanpa wates.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isFloat` nalika sampeyan kudu nampa mung input numerik sing winates lan dudu bilangan bulat; fungsi iki
> nolak bilangan bulat lan angka sing ora winates.

### Kauntungan

- Mbalekake `true` mung kanggo angka sing winates lan dudu bilangan bulat (ora kalebu bilangan bulat, `NaN`, `Infinity`,
  lan `-Infinity`).
- Bisa digunakake karo jinis input apa wae (`unknown`) lan kanthi aman nyepetake tipe kanthi mriksa
  `typeof value === "number"`.
- Nggunakake pangreksa numerik bawaan (`Number.isInteger`, `Number.isFinite`) supaya prilakune bisa diprediksi.

## Panggunaan

### Sintaks

Fungsi:

- `isFloat(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa iku angka floating-point.

### Impor fungsi lokal

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // value iku angka nalika runtime; iku winates lan dudu bilangan bulat
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isFloat(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 16:08:12 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>