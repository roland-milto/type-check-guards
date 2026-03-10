# isNumeric

## Katrangan

`isNumeric` nemtokake apa `value` tartamtu dianggep numerik kanthi mriksa jinis sing wis dirembug (resolved type) marang
`NUMERIC_TYPES`.

### Kahanan panggunaan

Gunakake `isNumeric` kanggo validasi input (contone, payload API, nilai form, konfigurasi) sadurunge nindakake operasi
numerik, lan supaya kanthi konsisten nampa jinis sing mirip numerik (kayata `BigInt`) miturut `NUMERIC_TYPES`.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isNumeric` iku predikat sing ngasilake boolean; anggep minangka pamriksan runtime kanggo mastiake apa sawijining
> nilai kalebu set jinis numerik sing ditemtokake dening library.

### Kauntungan

- Nggunakake `getTypeOf` bareng `NUMERIC_TYPES` kanggo nyentralake logika deteksi numerik lan njaga pamriksan tetep
  konsisten ing sakabehing codebase.
- Ngasilake boolean sing prasaja (`true`/`false`) supaya gampang kanggo branching lan panggunaan gaya guard.
- Ndhukung macem-macem representasi numerik (contone, `number`, `BigInt`) kaya sing ditemtokake dening `NUMERIC_TYPES`.

## Panggunaan

### Sintaks

Fungsi:

- `isNumeric(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa kalebu jinis numerik.

### Impor fungsi lokal

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v dianggep numerik miturut aturan tipe saka pustaka iki
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isNumeric(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 15:53:06 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>