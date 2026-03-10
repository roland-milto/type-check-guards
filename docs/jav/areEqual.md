# areEqual

## Katrangan

`areEqual` mriksa apa kabeh unsur ing sawijining array padha karo nilai sing diarepake, lan mung mbalekake `true` kanggo
array sing ora kosong nalika saben item cocog.

### Kahanan panggunaan

Validasi manawa sawijining dhaptar mung ngemot siji nilai sing diijini (contone, kabeh flag status `true`, kabeh peran
`"admin"`, utawa kabeh entri angka padha karo konstanta sing dibutuhake) nalika nganggep input kosong minangka ora
valid (`false`).

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areEqual` nalika sampeyan butuh pamriksan ketat kanggo kabeh item; fungsi iki mbalekake `false` kanggo array
> kosong lan kanggo input apa wae sing dudu array utawa ora kebak.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur cocog karo nilai sing diarepake; yen ora mbalekake `false`.
- Gagal cepet: mandheg mriksa sakcepete nemokake unsur sing ora cocog.
- Nglindhungi saka input ora valid kanthi mbalekake `false` nalika input dudu array sing kebak.

## Panggunaan

### Sintaks

Fungsi:

- `areEqual(value, expected)`

Paramèter:

- `value`: Array sing arep dipriksa.
- `expected`: Unsur sing kanggo mbandhingake saben item ing array.

### Impor fungsi lokal

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areEqual(value, expected)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:51:00 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>