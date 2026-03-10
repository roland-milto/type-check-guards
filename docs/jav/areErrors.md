# areErrors

## Katrangan

Mriksa apa sawijining array ora kosong lan mung ngemot obyek `Error`, banjur mbalekaké `true` utawa `false`.

### Kahanan panggunaan

Validasi manawa `unknown[]` sing diwènèhaké nalika runtime (contone kegagalan sing diklumpukaké, asil validasi, utawa
data sing wis dideserialisasi) iku dhaptar obyek `Error` sing ora kosong sadurungé diiterasi, dicathet, utawa dibuwang
manèh (rethrow).

> **Cathetan kanggo pangguna TypeScript:**
>
> `areErrors` mung mbalekaké `true` kanggo array sing kebak lan saben itemé iku `Error`; bakal mbalekaké `false` kanggo
> array kosong utawa yen ana unsur sing dudu `Error`.

### Kauntungan

- Njamin saben unsur iku instansi `Error`, saéngga nangani lan nyathet kesalahan bisa aman.
- Nolak array kosong, nyegah kahanan “ora ana kesalahan” sing ora disengaja dianggep minangka dhaptar kesalahan sing
  sah.
- Cocog dadi guard runtime nalika ngadhepi input `unknown[]` (contone saka API utawa blok `catch`).

## Panggunaan

### Sintaks

Fungsi:

- `areErrors(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isiné obyek `Error`.

### Impor fungsi lokal

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value iku larik ora kosong saka obyek Error
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areErrors(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Berkas iki digawe ing 6 February 2026 at 12:34:08 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>