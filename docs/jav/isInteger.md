# isInteger

## Katrangan

Nemtokake apa `value` tartamtu iku angka bilangan bulat aman.

### Kahanan panggunaan

Validasi input sing ora dipercaya (contone, query params, payload JSON, variabel lingkungan) sadurunge digunakake
minangka bilangan bulat kanggo indeks array, pagination, counter, utawa ID basis data.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isInteger` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka bilangan bulat numerik;
> fungsi iki mbalekake `true` mung kanggo nilai sing `typeof value === "number"` lan `Number.isSafeInteger(value)`.

### Kauntungan

- Mriksani loro-lorone keamanan jinis lan angka: mbalekake `true` mung nalika input iku angka lan bilangan bulat aman.
- Nyegah jebakan umum saka koersi angka: string kaya "5" kanthi bener mbalekake `false`.
- Nolak bilangan non-integer lan bilangan bulat sing ora aman, mula cocog kanggo ID, counter, lan indeks array.

## Panggunaan

### Sintaks

Fungsi:

- `isInteger(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa status integer-e.

### Impor fungsi lokal

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // bener
const b = isInteger(-100);   // bener
const c = isInteger("5");    // salah
const d = isInteger(5.5);    // salah
const e = isInteger(null);   // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isInteger(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:50:15 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>