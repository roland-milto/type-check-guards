# areObjects

## Katrangan

`areObjects` mriksa apa array kebak sing diwenehake mung ngemot obyek.

### Kahanan panggunaan

Gunakake `areObjects` nalika sampeyan nampa array sing durung dingerteni (contone saka parsing JSON utawa API eksternal)
lan kudu mesthekake yen ora kosong lan saben elemene iku obyek sadurunge ngiterasi lan ngakses properti obyek.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areObjects` kanggo validasi `unknown[]` sadurunge nganggep item-itemé minangka obyek; fungsi iki mbalekake
`false` kanggo array kosong.

### Kauntungan

- Mbalekake `true` mung nalika input iku array sing wis kebak lan saben elemene iku obyek.
- Mandheg luwih dhisik lan mbalekake `false` sakcepete nemokake elemen sing dudu obyek.
- Mbantu validasi input sing durung dingerteni sadurunge nindakake operasi sing khusus kanggo obyek.

## Panggunaan

### Sintaks

Fungsi:

- `areObjects(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine elemen obyek.

### Impor fungsi lokal

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value iku larik kebak isi obyek
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areObjects(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:09:09 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>