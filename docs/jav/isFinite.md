# isFinite

## Katrangan

Nemtokake apa `value` sing diwenehake iku `number` sing finite.

### Kahanan panggunaan

Gunakake `isFinite` kanggo validasi input sing ora dingerteni (contone saka JSON, formulir, utawa API) sadurunge
nindakake petungan numerik, supaya mesthekake nilaine iku angka nyata sing finite.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isFinite` mbalikake `true` mung kanggo angka sing finite; mbalikake `false` kanggo `NaN`, `Infinity`, lan nilai apa
> wae sing dudu angka.

### Kauntungan

- Nggunakake `Number.isFinite` sing wis ana ing bawaan kanggo mriksa kefinitan sing andal.
- Mbalekake `true` mung kanggo angka sing finite; mbalikake `false` kanggo `NaN`, `Infinity`, lan input sing dudu angka.
- Predikat sing prasaja, tanpa efek samping, cocog kanggo validasi lan logika pangreksa (guarding).

## Panggunaan

### Sintaks

Fungsi:

- `isFinite(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa finite.

### Impor fungsi lokal

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers yaiku: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value iku angka winates ing kene
  const doubled = value * 2;
  console.log(doubled);
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isFinite(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 16:30:18 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>