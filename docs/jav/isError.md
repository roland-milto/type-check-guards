# isError

## Katrangan

Mriksa apa `value` tartamtu iku instans saka `Error`.

### Kahanan panggunaan

Gunakake `isError` nalika sampeyan nampa nilai `unknown` (kayata saka blok `catch`, callback, utawa pustaka eksternal)
lan sampeyan kudu nemtokake kanthi aman apa iku `Error` sadurunge maca `message`, `name`, utawa `stack`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isError` kanggo njaga (guard) nilai `unknown` (contone saka `catch`) sadurunge nganggep iku minangka
`Error`.

### Kauntungan

- Nyedhiyakake pamriksa runtime sing prasaja kanggo mriksa apa sawijining nilai iku instans `Error`.
- Mbantu nyepetake (narrow) input sing ora dingerteni sadurunge ngakses properti `Error` kaya `message` utawa `stack`.
- Ngurangi risiko pangecualian runtime nalika nangani nilai saka `catch`, API eksternal, utawa sumber tanpa tipe.

## Panggunaan

### Sintaks

Fungsi:

- `isError(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa marang tipe `Error`.

### Impor fungsi lokal

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isError(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isError](../_analysis/isError.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 12:45:58 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>