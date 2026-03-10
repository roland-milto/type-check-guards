# isRegEx

## Katrangan

Nemtokake apa nilai sing diwenehake iku instans `RegExp`.

### Kahanan panggunaan

Validasi nilai sing diwenehake pangguna utawa nilai dinamis (contone, konfigurasi, payload API, input plugin) sadurunge
dianggep minangka ekspresi reguler.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isRegEx` kanggo nyepetake (narrow) nilai `unknown` (utawa union) sadurunge nggunakake properti utawa metode
> sing khusus kanggo RegExp; fungsi iki mbalekake `true` mung kanggo nilai sing dadi instans `RegExp`.

### Kauntungan

- Nyedhiyakake penjaga jinis runtime sing prasaja kanggo mriksa apa sawijining nilai iku `RegExp`.
- Mbantu nyegah kesalahan nalika kode ngarep-arep ekspresi reguler (contone, sadurunge nelpon `test`, `exec`, utawa maca
  `source`).
- Bisa digunakake kanggo literal regex lan uga instans sing digawe liwat `new RegExp(...)`.
- Ngasilake asil boolean sing cetha (`true`/`false`) tanpa mbuwang error kanggo input sing dudu regex.

## Panggunaan

### Sintaks

Fungsi:

- `isRegEx(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input iku RegExp ing kene
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isRegEx(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:29:47 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>