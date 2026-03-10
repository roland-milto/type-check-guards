# isValidDate

## Katrangan

`isValidDate` mriksa apa sawijining nilai iku obyek `Date` sing valid lan mung mbalekake `true` kanggo tanggal sing
nyata lan ora invalid.

### Kahanan panggunaan

Validasi input pangguna utawa data API sing bisa ngemot tanggal, supaya njamin nilaine iku instansi `Date` sing nyata
lan dudu tanggal sing invalid sadurunge nindakake perhitungan tanggal, formatting, utawa perbandingan.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isValidDate` sadurunge nelpon metode `Date` (contone, `toISOString`, `getTime`) marang nilai sing ditipé
`unknown` supaya njamin yèn kuwi obyek `Date` sing valid.

### Kauntungan

- Njamin yèn sawijining nilai iku instansi `Date` lan dudu mung string utawa angka sing mirip tanggal.
- Nolak tanggal sing ora valid (contone, `new Date("invalid")`) kanthi mriksa nilai wektu `NaN`.
- Guard boolean sing prasaja lan gampang dienggo ing kondisional lan pipeline validasi.
- Mbantu nyegah kesalahan runtime nalika nelpon metode tanggal kanthi mriksa input luwih dhisik.

## Panggunaan

### Sintaks

Fungsi:

- `isValidDate(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input iku instansi Date sing valid
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // salah
console.log(isValidDate("2025-12-22")); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isValidDate(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 16:40:37 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>