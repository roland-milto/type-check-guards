# isSet

## Katrangan

Nemtokake apa sawijining nilai iku `Set`.

### Kahanan panggunaan

Validasi input saka sumber njaba (contone, parsing JSON, input pangguna, utawa API pihak katelu) kanggo mesthekake yen
sawijining nilai iku `Set` sadurunge nindakake operasi `Set`.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isSet` kanggo nyepetake (narrow) nilai `unknown` sadurunge nelpon API khusus `Set` kaya `.add`, `.has`,
> utawa `.size`.

### Kauntungan

- Nyedhiyakake pamriksa runtime sing prasaja kanggo mesthekake apa sawijining nilai iku `Set`.
- Mbantu nyegah kesalahan tipe kanthi ngidini pamisahan logika luwih awal nalika sawijining nilai dudu `Set`.
- Bisa digunakake karo isi `Set` apa wae (kosong utawa ana isine) lan mbalekake `true`/`false` kanthi konsisten.

## Panggunaan

### Sintaks

Fungsi:

- `isSet(value)`

Paramèter:

- `value`: Nilai sing arep dipriksa.

### Impor fungsi lokal

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a iku sawijining Set nalika runtime
  console.log(a.size);
}

console.log(isSet(b)); // salah
```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isSet(value)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isSet](../_analysis/isSet.md)

<br>

---

<small>Berkas iki digawe ing 30 January 2026 at 23:10:04 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>