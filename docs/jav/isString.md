# isString

## Katrangan

`isString` nemtokake apa sawijining nilai iku string.

### Kahanan panggunaan

Validasi input pangguna, field payload API, utawa nilai konfigurasi nalika runtime kanggo mesthekake yen sawijining
nilai iku string sadurunge ngetrapake operasi string (contone: trimming, splitting, konversi huruf gedhe/cilik).

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isString` kanggo validasi nilai `unknown` utawa sing tipene longgar sadurunge nelpon metode string; fungsi
> iki mung mbalekake `true` nalika `typeof value === "string"`.

### Kauntungan

- Priksa sing prasaja lan cepet nganggo `typeof`.
- Ngasilake asil boolean sing bisa diprediksi: `true` kanggo string, yen ora `false`.
- Bisa kanggo string kosong lan sing ora kosong.
- Migunani minangka guard runtime sing entheng sadurunge nindakake operasi khusus string.

## Panggunaan

### Sintaks

Fungsi:

- `isString(value)`

Paramèter:

- `value`: Nilai sing arep diuji apa kalebu jinis string.

### Impor fungsi lokal

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input iku string ing kene
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isString(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isString](../_analysis/isString.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:14:25 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>