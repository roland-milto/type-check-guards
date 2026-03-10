# areSets

## Katrangan

Mriksa apa sawijining array sing ora kosong mung ngemot instansi `Set`, mbalekake `true` yen iya lan `false` yen ora.

### Kahanan panggunaan

Validasi manawa sawijining nilai (contone, saka input pangguna, parsing JSON, utawa API eksternal) iku array sing ora
kosong saka obyek `Set` sadurunge ngolah saben set.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areSets` kanggo validasi input sing ora dingerteni sadurunge ngiterasi lan nelpon API `Set` (contone,
`.size`, `.has`, `.add`) ing saben elemen.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing ora kosong lan saben elemene iku instansi `Set`.
- Nyegah positif palsu kanggo array kosong kanthi mbalekake `false` nalika array ora nduwèni elemen.
- Migunani minangka penjaga runtime sadurunge nindakake operasi khusus `Set` ing saben elemen.

## Panggunaan

### Sintaks

Fungsi:

- `areSets(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine instansi `Set`.

### Impor fungsi lokal

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a iku larik saka instansi Set nalika runtime
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // salah
console.log(areSets(c)); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areSets(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areSets](../_analysis/areSets.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:13:55 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>