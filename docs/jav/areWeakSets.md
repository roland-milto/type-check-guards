# areWeakSets

## Katrangan

Mriksa apa input iku larik ora kosong sing saben unsuré `WeakSet`, lan mung ngasilake `true` yen mung ing kahanan kuwi.

### Kahanan panggunaan

Validasi input runtime (umpamane saka API, konfigurasi, utawa data saka pangguna) kanggo njamin sampeyan nduweni dhaptar
ora kosong saka instans `WeakSet` sadurunge nerusake logika sing gumantung marang prilaku `WeakSet`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areWeakSets` kanggo validasi input sing ora dingerteni sadurunge dianggep minangka `WeakSet[]`. Iki
> ngasilake `false` kanggo larik kosong lan input sing dudu larik.

### Kauntungan

- Njamin saben unsur ing larik input iku `WeakSet`.
- Ngasilake `false` kanggo larik kosong, supaya ora kelakon asil “kabeh valid” kanthi ora sengaja nalika data ora ana.
- Gagal kanthi aman kanthi ngasilake `false` nalika input dudu larik sing kebak (kalebu `null`).
- Migunani minangka guard sadurunge nindakake operasi sing mbutuhake instans `WeakSet`.

## Panggunaan

### Sintaks

Fungsi:

- `areWeakSets(array)`

Paramèter:

- `array`: Larik sing arep dipriksa apa isine obyek `WeakSet`.

### Impor fungsi lokal

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a iku larik ora-kosong saka instansi WeakSet
}

console.log(areWeakSets(a)); // bener
console.log(areWeakSets(b)); // salah
console.log(areWeakSets(c)); // salah
console.log(areWeakSets(null as unknown)); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areWeakSets(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 14:09:11 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>