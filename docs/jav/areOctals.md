# areOctals

## Katrangan

`areOctals` nemtokake apa nilai sing diwenehake iku array sing ora kosong saka string oktal sing valid.

### Kahanan panggunaan

Gunakake `areOctals` nalika nvalidasi input pangguna, nilai konfigurasi, utawa payload API sing kudu ngemot literal
oktal (umpamane mode ijin berkas kaya `0o755`) lan sampeyan pengin nolak array kosong utawa entri sing ora valid kanthi
mbalekake `false`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areOctals` kanggo mesthekake sampeyan nduweni `unknown[]` sing ora kosong lan saben entri iku string oktal
> sing valid sadurunge dikonversi (umpamane liwat `Number(...)` utawa parsing kustom).

### Kauntungan

- Nvalidasi yen sawijining nilai iku array sing ora kosong lan saben elemene iku string oktal, mbalekake `true` mung yen
  kabeh item lolos.
- Gagal cepet: mbalekake `false` sakcepete nemokake elemen sing dudu oktal.
- Migunani minangka guard sadurunge ngurai utawa ngowahi string oktal supaya ora ana kesalahan runtime lan penanganan
  input sing ora konsisten.

## Panggunaan

### Sintaks

Fungsi:

- `areOctals(array)`

Paramèter:

- `array`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // value iku larik ora-kosong saka string oktal
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areOctals(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:56:49 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>