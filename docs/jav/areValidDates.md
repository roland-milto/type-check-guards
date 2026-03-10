# areValidDates

## Katrangan

Nemtokake apa sawijining array ora kosong lan kabeh isine mung obyek `Date` sing sah.

### Kahanan panggunaan

Gunakake `areValidDates` kanggo mvalidasi array sing diwenehake pangguna utawa saka API sadurunge nindakake operasi
adhedhasar tanggal (ngurutake, mriksa rentang, format), supaya kabeh entri iku obyek `Date` sing nyata lan sah lan
dhaptare ora kosong.

> **Cathetan kanggo pangguna TypeScript:**
>
> `areValidDates` mbalekake `false` kanggo array kosong; priksa manawa array kasebut pancen dimaksudake ora kosong
> sadurunge ngandelake minangka langkah validasi.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku instansi `Date` sing sah (ora ana tanggal ora sah kaya
  `new Date('invalid')`).
- Nolak input kosong kanthi mbalekake `false`, njamin sampeyan mung nampa dhaptar tanggal sing migunani lan ora kosong.
- Nyedhiyakake pamriksa boolean gaya guard sing prasaja lan gampang digabung karo validasi liyane.

## Panggunaan

### Sintaks

Fungsi:

- `areValidDates(array)`

Paramèter:

- `array`: Array sing arep dipriksa, bisa wae ngemot obyek `Date`.

### Impor fungsi lokal

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // bener
console.log(areValidDates(b)); // salah
console.log(areValidDates(c)); // salah
console.log(areValidDates(d)); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areValidDates(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:32:18 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>