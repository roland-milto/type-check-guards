# areBooleans

## Katrangan

`areBooleans` mriksa apa sawijining array sing ora kosong mung ngemot nilai boolean, mbalekake `true` yen iya lan
`false` yen ora.

### Kahanan panggunaan

Validasi data saka pangguna utawa saka njaba (contone, payload JSON, parameter query, array konfigurasi) kanggo
mesthekake dhaptar sing ora kosong mung ngemot boolean sadurunge ngetrapake logika boolean utawa ngirim menyang API sing
ngarepake `boolean[]`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areBooleans` kanggo validasi `unknown[]` sadurunge dianggep dadi `boolean[]`; fungsi iki mbalekake `false`
> kanggo array kosong, mula tangani kasus kuwi kanthi cetha yen dhaptar kosong kudune diijini.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku boolean lan input-e array sing ora kosong.
- Nyegah positif palsu kanthi nolak array kosong (mbalekake `false`).
- Cocog kanggo penjaga runtime sadurunge operasi sing mung kanggo boolean (contone, `every`, `some`, reduksi logis).

## Panggunaan

### Sintaks

Fungsi:

- `areBooleans(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine unsur boolean.

### Impor fungsi lokal

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areBooleans(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:40:46 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>