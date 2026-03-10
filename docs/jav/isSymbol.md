# isSymbol

## Katrangan

`isSymbol` nemtokake apa sawijining nilai kalebu jinis `symbol`, mbalekake `true` kanggo simbol lan `false` kanggo
liyane.

### Kahanan panggunaan

Validasi manawa nilai `unknown` iku `symbol` sadurunge digunakake minangka pengenal unik, kunci registry, utawa kunci
properti sing diitung (computed) ing objek lan map.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isSymbol` kanggo nyepetake (narrow) `unknown` dadi `symbol` sadurunge nelpon fungsi sing gegayutan karo
> simbol utawa nggunakake minangka kunci properti sing diitung (computed).

### Kauntungan

- Nyedhiyakake pamriksan runtime sing prasaja lan bisa dipercaya kanggo jinis primitif JavaScript `symbol`.
- Mbantu nyepetake (narrow) nilai `unknown` sadurunge nggunakake API khusus simbol utawa nyimpen minangka kunci.
- Ngindhari positif palsu kanthi nggunakake `typeof`, yaiku cara kanonik kanggo ndeteksi nilai `symbol`.

## Panggunaan

### Sintaks

Fungsi:

- `isSymbol(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input iku simbol ing kene
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isSymbol(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:27:16 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>