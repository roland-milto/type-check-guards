# isObject

## Katrangan

Nemtokake apa `value` tartamtu iku `object` (kajaba `null`).

### Kahanan panggunaan

Gunakake `isObject` kanggo validasi input sing ora dingerteni (contone, JSON sing wis diparse, respons API, payload
event) sadurunge ngakses properti, supaya mesthekake nilaine iku object lan dudu `null`.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isObject` iku guard runtime sing mbalekake boolean; ora nyempitake menyang wujud object tartamtu. Gabungna karo
> priksa tambahan (contone, anane properti) nalika sampeyan butuh typing sing luwih kuwat.

### Kauntungan

- Mbalekake `true` mung kanggo nilai sing dudu `null` lan sing `typeof`-e yaiku `"object"`.
- Nyegah jebakan umum ing JavaScript nalika `null` yen ora bakal dianggep minangka object.
- Bisa kanggo object polos lan instans object bawaan (contone, `Date`, `RegExp`).
- Priksa runtime sing prasaja lan cepet, cocog kanggo pemrograman defensif lan validasi input.

## Panggunaan

### Sintaks

Fungsi:

- `isObject(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa apa kalebu `object`.

### Impor fungsi lokal

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input iku obyek sing ora null nalika runtime
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isObject(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isObject](../_analysis/isObject.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:18:58 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>