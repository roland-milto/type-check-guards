# areBuffers

## Katrangan

`areBuffers` mriksa apa nilai sing diwenehake iku array sing ora kosong lan kebak, ing ngendi saben unsur iku `Buffer`,
mbalekake `true` yen ya lan `false` yen ora.

### Kahanan panggunaan

Validasi array chunk sing mlebu (contone, saka stream, unggahan file, utawa paket jaringan) kanggo njamin kabeh bagean
iku instansi `Buffer` sadurunge digabung, didekode, utawa dipasrahake menyang fungsi kriptografi utawa pangolahan biner.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areBuffers` kanggo validasi `unknown[]` sadurunge nelpon API khusus Buffer kaya `Buffer.concat`, supaya
> fungsi mung mbalekake `true` yen saben unsur iku `Buffer`.

### Kauntungan

- Njamin saben unsur ing input iku instansi `Buffer` Node.js, mbalekake `true` mung yen sakabehe array cocog.
- Nolak input sing ora valid luwih dhisik kanthi mbutuhake array sing ora kosong lan kebak; mbalekake `false` kanggo
  array kosong utawa dudu array.
- Migunani minangka guard sadurunge nindakake operasi sing mung kanggo buffer (contone, penggabungan, hashing, protokol
  biner).

## Panggunaan

### Sintaks

Fungsi:

- `areBuffers(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine instansi buffer.

### Impor fungsi lokal

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areBuffers(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 16:25:46 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>