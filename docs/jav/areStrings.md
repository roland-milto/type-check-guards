# areStrings

## Katrangan

`areStrings` mriksa apa sawijining array ora kosong lan kabeh unsuré iku string, mung mbalekake `true` yen mung ing
kahanan kuwi.

### Kahanan panggunaan

Validasi data saka njaba utawa saka pangguna (contone, parameter query, payload JSON, kolom CSV) kanggo njamin sampeyan
nduweni dhaptar string sing ora kosong sadurunge diproses.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areStrings` kanggo validasi array sing durung dingerteni sadurunge ngetrapake logika khusus string; fungsi
> iki mbalekake `false` kanggo array kosong.

### Kauntungan

- Njamin saben unsur iku string lan nolak array campuran jinis kanthi mbalekake `false`.
- Nolak array kosong, mula `true` mung nuduhake dhaptar string sing ora kosong.
- Migunani minangka pangreksa runtime cepet sadurunge nindakake operasi khusus string (contone, `trim`, `toLowerCase`).

## Panggunaan

### Sintaks

Fungsi:

- `areStrings(value)`

Paramèter:

- `value`: Expected type `string[]`.

### Impor fungsi lokal

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input iku string[] sing ora kosong nalika runtime
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areStrings(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:18:51 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>