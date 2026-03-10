# areOneOfType

## Katrangan

`areOneOfType` mriksa apa kabèh unsur ing array sing ora kosong iku kalebu salah siji saka jinis runtime sing
ditemtokaké.

### Kahanan panggunaan

Validasi data sing mlebu (umpamané JSON sing wis diparsing) nalika sawijining field kudu dadi array sing ora kosong lan
item-itemé diwatesi mung marang sakumpulan jinis primitif sing wis dingertèni; mbalèkaké `false` nalika array kosong
utawa ngandhut jinis sing ora diidinaké.

> **Cathetan kanggo pangguna TypeScript:**
>
> Fungsi iki mbalèkaké boolean lan ora nyepetaké (narrow) jinis unsur array nalika wektu kompilasi; gunakna minangka
> langkah validasi runtime sadurungé pangolahan luwih lanjut.

### Kauntungan

- Njamin saben unsur ing sawijining array cocog paling ora siji jinis runtime sing diidinaké, mbalèkaké `true` mung
  nalika kabèh array lolos.
- Nolak input sing ora valid luwih awal: mbalèkaké `false` nalika `array` utawa `types` kosong utawa dudu array sing
  kebak isi.
- Migunani kanggo validasi koleksi campuran jinis (umpamané angka lan string) nganggo siji panggilan menyang
  `areOneOfType`.

## Panggunaan

### Sintaks

Fungsi:

- `areOneOfType(array, types)`

Paramèter:

- `array`: Sijining array unsur kanggo diverifikasi marang jinis-jinis sing diwènèhaké.
- `types`: Sijining array string sing makili jinis data kanggo dipriksa.

### Impor fungsi lokal

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areOneOfType(array, types)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:37:17 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>