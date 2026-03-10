# isOneOfType

## Katrangan

`isOneOfType` nemtokake apa sawijining `value` cocog paling ora karo salah siji saka string jinis sing diwenehake,
mbalekake `true` yen ana sing cocog lan `false` yen ora.

### Kahanan panggunaan

Validasi data sing tipené longgar utawa saka njaba (contone, JSON sing wis diparse, parameter query) kanthi ngidini
pirang-pirang jinis runtime sing bisa ditampa (kayata `number` utawa `string`) sadurunge nerusake logika sabanjure.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `isOneOfType` nalika sampeyan pengin mriksa runtime yen sawijining nilai cocog karo salah siji saka sawetara
> jinis sing diijini; fungsi iki mbalekake `true` yen paling ora ana siji jinis sing cocog, yen ora `false`.

### Kauntungan

- Mriksani sawijining nilai marang pirang-pirang jinis sing diijini ing siji panggilan, mbalekake `true` nalika cocog
  pisanan ditemokake.
- Bisa digunakake karo input `unknown`, dadi migunani ing wates runtime (contone, data eksternal, input pangguna).
- Asil boolean sing prasaja (`true`/`false`) sing gampang digabung karo logika kondisional lan bali luwih awal.

## Panggunaan

### Sintaks

Fungsi:

- `isOneOfType(value, types)`

Paramèter:

- `value`: Nilai sing arep dipriksa marang jinis-jinis sing ditemtokake.
- `types`: Larikan string jinis sing makili kemungkinan jinis saka nilai kasebut.

### Impor fungsi lokal

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input iku sawijining obyek nalika runtime
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.isOneOfType(value, types)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 23:43:46 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>