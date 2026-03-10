# isFalse

## Katrangan

`isFalse` mriksa apa sawijining nilai tartamtu padha persis karo literal boolean `false`.

### Kahanan panggunaan

Validasi data sing ora dingerteni (contone saka JSON, parameter query, utawa input pangguna) nalika mung nilai boolean
`false` sing eksplisit kudu dianggep minangka flag sing valid, lan liyane kabeh kudu ditolak.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isFalse` nalika sampeyan mung perlu nampa literal `false` lan nolak kabeh nilai falsy liyane; fungsi iki
> mbalekake `true` mung kanggo `value === false`.

### Kauntungan

- Nyedhiyakake pamriksan ketat kanggo literal boolean `false` tanpa koersi.
- Mbantu mbedakake `false` saka nilai falsy liyane kaya `0`, `""`, `null`, lan `undefined`.
- Nambah keterbacaan kanthi nggawe maksud dadi cetha nalika validasi input sing ora dingerteni.

## Panggunaan

### Sintaks

Fungsi:

- `isFalse(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input iku persis false ing kene
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isFalse(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 16:22:01 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>