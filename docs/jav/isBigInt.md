# isBigInt

## Katrangan

`isBigInt` mriksa apa sawijining nilai nduweni jinis `bigint`, mbalekake `true` kanggo primitif BigInt lan `false`
kanggo liyane.

### Kahanan panggunaan

Validasi lan nyepetake nilai sing asalé saka sumber tanpa tipe (contone, parsing JSON, input pangguna, API eksternal)
sadurunge nindakake itungan khusus BigInt utawa nyimpen ing kolom sing mung nampa BigInt.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isBigInt` kanggo nyepetake `unknown` dadi `bigint` sadurunge nindakake aritmetika BigInt (contone, `+`, `*`)
> sing mbutuhake operand BigInt.

### Kauntungan

- Nyedhiyakake pamriksa runtime sing prasaja lan bisa dipercaya kanggo jinis primitif `bigint`.
- Mbantu nyepetake (narrow) nilai `unknown` sadurunge nindakake operasi sing mung kanggo BigInt.
- Ngindhari positif palsu: angka biasa, string, lan jinis liyane bakal mbalekake `false`.

## Panggunaan

### Sintaks

Fungsi:

- `isBigInt(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // bener
console.log(isBigInt(10));  // salah
console.log(isBigInt("10")); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isBigInt(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:32:11 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>