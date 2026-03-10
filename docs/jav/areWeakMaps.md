# areWeakMaps

## Katrangan

`areWeakMaps` mriksa apa sawijining nilai iku array ora kosong sing saben unsuré `WeakMap`, mung ngasilake `true` yen
mangkono lan `false` yen ora.

### Kahanan panggunaan

Validasi data runtime (umpamane JSON sing wis diparse, input plugin, utawa konfigurasi sing tipené longgar) kanggo
njamin iku array ora kosong sing isine instansi `WeakMap` sadurunge diiterasi lan nelpon metode `WeakMap`; ngasilake
`false` yen ana unsur sing dudu `WeakMap` utawa yen array kosong.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areWeakMaps` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka `WeakMap[]` sing ora
> kosong; fungsi iki ngasilake `false` kanggo array kosong.

### Kauntungan

- Njamin saben unsur ing array sing diwenehake iku instansi `WeakMap`.
- Ngasilake `false` kanggo array kosong, supaya ora keliru nampa “ora ana data” minangka input sing sah.
- Migunani minangka guard sadurunge nindakake operasi khusus `WeakMap` marang kabeh item.

## Panggunaan

### Sintaks

Fungsi:

- `areWeakMaps(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine instansi `WeakMap`.

### Impor fungsi lokal

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list iku larik ora-kosong saka instansi WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // dudu WeakMap[] sing ora-kosong
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areWeakMaps(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 13:37:46 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>