# isTrue

## Katrangan

`isTrue` nemtokake apa sawijining nilai tartamtu padha persis karo `true`.

### Kahanan panggunaan

Gunakake `isTrue` kanggo validasi flag, feature toggle, utawa nilai konfigurasi sing mung literal `true` sing kudu
ditampa lan liyane kabeh kudu dianggep `false`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isTrue` nalika sampeyan kudu nampa mung literal boolean `true`, dudu mung nilai truthy.

### Kauntungan

- Nyedhiyakake pamriksan ketat kanggo literal boolean `true` (tanpa koersi).
- Mbantu mbedakake `true` saka nilai truthy kaya `1`, `"true"`, utawa `{}`.
- Prilaku sing prasaja lan bisa diprediksi, cocog kanggo guard lan pipeline validasi.

## Panggunaan

### Sintaks

Fungsi:

- `isTrue(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // bener
const b = isTrue(1);         // salah
const c = isTrue("true");   // salah

if (isTrue(a)) {
  // a iku bener ing kene
}
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isTrue(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:42:43 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>