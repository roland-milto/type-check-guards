# arePromises

## Katrangan

`arePromises` nemtokake apa kabeh unsur ing sawijining array iku instansi `Promise`.

### Kahanan panggunaan

Validasi manawa dhaptar sing dibangun kanthi dinamis utawa diwenehake saka njaba mung ngemot promise sadurunge
digabungake (contone nganggo `Promise.all`).

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `arePromises` kanggo validasi `unknown[]` sadurunge nelpon `Promise.all` utawa operasi liyane sing mung
> kanggo promise; fungsi iki ngasilake `false` kanggo array kosong.

### Kauntungan

- Njamin saben saben unsur iku `Promise` sadurunge kowe nerusake nganggo logika sing khusus kanggo promise.
- Ngasilake `false` kanggo array sing ora kebak, supaya ora ana asil sing ambigu kanggo input sing kosong.
- Migunani minangka penjaga runtime nalika nggarap `unknown[]` saka sumber njaba.

## Panggunaan

### Sintaks

Fungsi:

- `arePromises(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine instansi Promise.

### Impor fungsi lokal

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values iku larik saka instansi Promise nalika runtime
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.arePromises(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:48:42 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>