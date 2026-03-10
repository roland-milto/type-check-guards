# areNumbers

## Katrangan

`areNumbers` mriksa apa sawijining nilai iku array sing ora kosong lan kabeh elemene iku angka.

### Kahanan panggunaan

Validasi data saka pangguna utawa saka API kanggo mesthekake yen iku array angka sing ora kosong sadurunge ngitung
total, rata-rata, utawa agregasi numerik liyane.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areNumbers` kanggo validasi array sing ora dingerteni sadurunge nindakake perhitungan numerik; fungsi iki
> mbalekake `false` kanggo array kosong lan kanggo array sing ngemot nilai apa wae sing dudu angka.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing ora kosong lan saben elemene iku angka.
- Nyegah positif palsu kanthi nolak array kosong lan input sing dudu array.
- Migunani minangka pangreksa sadurunge operasi numerik (contone, njumlah, ngitung rata-rata) supaya ora ana kesalahan
  runtime.

## Panggunaan

### Sintaks

Fungsi:

- `areNumbers(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine unsur angka.

### Impor fungsi lokal

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areNumbers(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:04:44 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>