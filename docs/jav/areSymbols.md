# areSymbols

## Katrangan

Mriksa apa input iku array sing kebak (ora kosong) sing elemene kabeh simbol, banjur mbalekake `true` utawa `false`.

### Kahanan panggunaan

Validasi manawa sawijining field konfigurasi (contone, dhaptar kunci unik sing diwakili minangka simbol) iku array sing
ora kosong lan mung ngemot simbol sadurunge digunakake ing API sing mbutuhake `symbol[]`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areSymbols` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka `symbol[]`; fungsi iki
> mbalekake `false` kanggo sing dudu array lan array kosong.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing ora kosong lan saben elemene iku simbol.
- Nyegah positif palsu kanthi nolak sing dudu array lan array kosong liwat pamriksa internal filled-array.
- Migunani minangka runtime type guard kanggo validasi dhaptar sing mung isi simbol sadurunge diproses luwih lanjut.

## Panggunaan

### Sintaks

Fungsi:

- `areSymbols(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine elemen simbol.

### Impor fungsi lokal

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a iku larik sing mung isi simbol nalika runtime
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areSymbols(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:22:12 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>