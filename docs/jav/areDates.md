# areDates

## Katrangan

`areDates` nemtokaké apa sawijining larik wis kebak lan mung ngemot obyek `Date`, lan mung mbalèkaké `true` nalika kabèh
unsur iku tanggal sing valid.

### Kahanan panggunaan

Gunakna `areDates` kanggo validasi input sing ora dingertèni (umpamané JSON sing diparsing, data formulir, payload API)
sadurunge mlakokaké logika khusus tanggal kaya ngurutaké adhedhasar wektu, ngformat, utawa ngitung rentang.

> **Cathetan kanggo pangguna TypeScript:**
>
> Mbalèkaké `true` mung kanggo larik sing ora kosong lan saben unsuré `Date`; larik kosong bakal ngasilaké `false`.

### Kauntungan

- Njamin yèn sawijining larik ora kosong sadurunge mriksa isiné, supaya ora ngasilaké `true` kanggo input sing kosong.
- Mastèkaké saben unsur iku instansi `Date`, lan langsung mbalèkaké `false` nalika nemokaké unsur pisanan sing ora
  cocog.
- Migunani minangka pamriksan gaya-guard sadurunge nindakake operasi khusus tanggal marang item-item ing larik.

## Panggunaan

### Sintaks

Fungsi:

- `areDates(array)`

Paramèter:

- `array`: Larik sing arep dipriksa apa isiné obyek `Date`.

### Impor fungsi lokal

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // bener
console.log(areDates(b)); // salah
console.log(areDates(c)); // salah

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areDates(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areDates](../_analysis/areDates.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 15:30:49 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>