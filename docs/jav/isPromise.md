# isPromise

## Katrangan

Nemtokake apa sawijining nilai iku `Promise`.

### Kahanan panggunaan

Gunakake `isPromise` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka `Promise`, kayata nalika
nangani nilai sing dibalekake saka plugin, impor dinamis, utawa API sing tipené longgar.

> **Cathetan kanggo pangguna TypeScript:**
>
> `isPromise` mriksa nganggo `instanceof Promise`, mula mung mbalekake `true` kanggo instansi `Promise` sing nyata (dudu
> thenable umum).

### Kauntungan

- Nyedhiyakake pamriksa runtime sing prasaja kanggo mriksa apa sawijining nilai iku `Promise`.
- Mbantu njaga jalur kode sing mbutuhake instansi `Promise` sing nyata, kanthi mbalekake `true` utawa `false` kanthi
  bisa diprediksi.
- Ngindhari positif palsu saka obyek “thenable” (contone, `{ then() {} }`) amarga mbutuhake instansi `Promise` sing
  nyata.

## Panggunaan

### Sintaks

Fungsi:

- `isPromise(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // bener
console.log(isPromise(b)); // salah
console.log(isPromise(123)); // salah
console.log(isPromise(null)); // salah

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isPromise(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:53:14 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>