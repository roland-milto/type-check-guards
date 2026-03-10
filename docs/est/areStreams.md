# areStreams

## Kirjeldus

`areStreams` määrab, kas väärtus on täidetud massiiv, milles iga element on `Stream`.

### Kasutusjuht

Valideeri kasutaja poolt antud või dünaamiliselt koostatud kogumid (nt mitu faili lugemise voogu) enne nende
torustamist, jätkamist või muul viisil grupina kasutamist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areStreams`, et valideerida tundmatu sisend enne, kui käsitled seda kui `Stream[]`; see tagastab `true` ainult
> siis, kui väärtus on mittetühi massiiv ja iga element on `Stream`.

### Eelised

- Tagab, et sisend on täidetud massiiv, kus iga element on `Stream`.
- Pakub lihtsat `true`/`false` kaitset voogude kogumite valideerimiseks enne töötlemist.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse element, mis ei ole `Stream`.
- Aitab vältida käitusaja vigu, kui kood eeldab, et kõik üksused on `Stream`-i eksemplarid.

## Kasutus

### Süntaks

Funktsioon:

- `areStreams(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse Stream-objektide suhtes.

### Funktsiooni kohalik import

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input on täidetud Stream-objektide massiiv
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areStreams(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:33:35 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>