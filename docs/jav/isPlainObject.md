# isPlainObject

## Katrangan

Mriksani apa `value` tartamtu iku obyek polos lan mbalekake `true` yen iya, yen ora `false`.

### Kahanan panggunaan

Validasi manawa input `unknown` (contone JSON sing diparse, data eksternal, utawa argumen fungsi) iku obyek polos
sadurunge maca key utawa ngowahi (mapping) dadi obyek konfigurasi sing wis ditipeni (typed).

> **Cathetan kanggo pangguna TypeScript:**
>
> `isPlainObject` migunani kanggo nyepetake (narrow) `unknown` sadurunge dianggep minangka obyek kaya record; fungsi iki
> mung mbalekake `true` kanggo nilai sing tag internal-e yaiku `[object Object]`.

### Kauntungan

- Nyedhiyakake pamriksa sing prasaja lan bisa dipercaya kanggo mriksa apa sawijining nilai iku obyek polos (yaiku,
  `Object` / `{}`), mbalekake `true` utawa `false`.
- Mbantu mbedakake obyek polos saka array, fungsi, `null`, lan jinis non-obyek-polos liyane.
- Migunani minangka type guard ing TypeScript kanggo nyepetake (narrow) nilai `unknown` sadurunge ngakses properti
  obyek.

## Panggunaan

### Sintaks

Fungsi:

- `isPlainObject(value)`

Paramèter:

- `value`: Nilai sing arep diuji apa kalebu obyek polos.

### Impor fungsi lokal

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input iku obyek polos ing kene
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // bener
console.log(isPlainObject([])); // salah
console.log(isPlainObject(null)); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isPlainObject(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 12:18:12 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>