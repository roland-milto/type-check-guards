# isDate

## Katrangan

`isDate` nemtokake apa nilai sing diwenehake iku `Date`, mbalekake `true` kanggo instansi `Date` lan `false` kanggo
liyane.

### Kahanan panggunaan

Validasi lan nyempitake nilai sing ora dingerteni (umpamane data panjaluk, nilai konfigurasi, utawa JSON sing wis
diparse) sadurunge nindakake operasi `Date` kayata format, mbandhingake, utawa nelpon `toISOString()`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isDate` kanggo nyempitake `unknown` dadi `Date` nalika runtime; fungsi iki mbalekake `true` mung kanggo
> instansi `Date` sing nyata (dudu string tanggal).

### Kauntungan

- Nyedhiyakake pangreksa runtime sing prasaja kanggo mriksa apa sawijining nilai iku `Date`.
- Mbantu nyegah kesalahan tipe kanthi mesthekake mung instansi `Date` sing lolos validasi.
- Migunani kanggo validasi input sing ora dingerteni (umpamane payload API) sadurunge nggunakake metode sing khusus
  kanggo tanggal.

## Panggunaan

### Sintaks

Fungsi:

- `isDate(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa kanggo tipe `Date`.

### Impor fungsi lokal

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input iku Date ing kene
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isDate(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isDate](../_analysis/isDate.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 15:37:49 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>