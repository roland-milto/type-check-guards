# areMaps

## Katrangan

`areMaps` nemtokake apa sawijining array iku ora kosong lan kabeh unsuré iku instansi `Map`.

### Kahanan panggunaan

Validasi input sing ora dingerteni (contone saka parsing JSON, API eksternal, utawa sumber dinamis) sadurunge dianggep
minangka dhaptar `Map` sing ora kosong.

> **Cathetan kanggo pangguna TypeScript:**
>
> Mbalekake `false` kanggo array kosong; mung mbalekake `true` yen array kebak lan saben unsur iku `Map`.

### Kauntungan

- Njamin saben unsur iku instansi `Map`, mung mbalekake `true` yen sakabehe array lolos pamriksan.
- Miturut rancangan, nolak array kosong, supaya ora kesasar nampa “ora ana data” minangka input sing valid.
- Migunani minangka guard sadurunge nindakake operasi khusus `Map` (contone, `.get()`, `.set()`, iterasi) ing
  saindhenging koleksi.

## Panggunaan

### Sintaks

Fungsi:

- `areMaps(array)`

Paramèter:

- `array`: Array sing arep dipriksa.

### Impor fungsi lokal

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items dijamin dadi larik sing ora kosong saka instansi Map nalika runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false kanggo: larik kosong, utawa larik sing ngemot nilai apa wae sing dudu Map
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areMaps(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 16:13:03 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>