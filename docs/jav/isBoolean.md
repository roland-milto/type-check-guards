# isBoolean

## Katrangan

Nemtokake apa sawijining nilai iku `boolean`.

### Kahanan panggunaan

Validasi data eksternal utawa tanpa tipe (contone, variabel lingkungan, payload JSON, parameter query) kanggo mesthekake
yen sawijining nilai iku `boolean` sadurunge digunakake ing logika kondisional.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isBoolean` kanggo nyepetake `unknown` dadi `boolean` sadurunge ngetrapake operasi boolean.

### Kauntungan

- Priksa runtime sing prasaja lan cepet nganggo `typeof`.
- Mbantu validasi input sing ora dingerteni sadurunge logika khusus boolean.
- Ngasilake asil `boolean` sing bisa diprediksi (`true`/`false`).

## Panggunaan

### Sintaks

Fungsi:

- `isBoolean(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input iku boolean ing kene
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isBoolean(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:36:45 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>