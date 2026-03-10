# isPrimitive

## Katrangan

`isPrimitive` nemtokake apa sawijining nilai iku primitif (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`).

### Kahanan panggunaan

Validasi input nalika runtime (contone, kolom payload API, nilai konfigurasi, utawa data sing diwenehake pangguna)
kanggo mesthekake yen sawijining nilai iku primitif sadurunge diserialisasi, dilog, utawa ditrapake operasi sing mung
kanggo primitif.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isPrimitive` kanggo njaga input `unknown` sadurunge dianggep minangka objek utawa fungsi; fungsi iki
> mbalekake `true` kanggo primitif lan `false` kanggo objek lan fungsi.

### Kauntungan

- Pemeriksaan cepet tanpa alokasi kanggo mriksa apa sawijining nilai iku primitif JavaScript.
- Nganggep `null` kanthi bener minangka primitif (sanajan `typeof null` iku `"object"`).
- Mbantu nyepetake panyaringan nilai `unknown` sadurunge nindakake operasi sing mung kanggo objek.

## Panggunaan

### Sintaks

Fungsi:

- `isPrimitive(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa kalebu jinis primitif.

### Impor fungsi lokal

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isPrimitive(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:56:39 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>