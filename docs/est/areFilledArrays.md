# areFilledArrays

## Kirjeldus

`areFilledArrays` kontrollib, kas kahemõõtmeline massiiv ei ole tühi ja kõik selle alam-massiivid on mittetühjad.

### Kasutusjuht

Kasuta `areFilledArrays` tabeli- või maatriksilaadse sisendi (nt CSV read, ruudustikuandmed, rühmitatud tulemused)
valideerimiseks, et saaksid turvaliselt eeldada, et on vähemalt üks alam-massiiv ja ükski alam-massiividest ei ole tühi.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areFilledArrays`, kui pead enne itereerimist või indekseerimist veenduma, et 2D massiivis on vähemalt üks rida
> ja igas reas on vähemalt üks element.

### Eelised

- Kontrollib, et välimine massiiv ei ole tühi ja et iga sisemine massiiv on samuti mittetühi, tagastades `true` ainult
  siis, kui mõlemad tingimused on täidetud.
- Töötab mis tahes elemenditüüpidega alam-massiivides (nt numbrid, stringid, objektid, pesastatud massiivid), kuna
  kontrollib ainult massiivi „täidetuse” olekut, mitte elementide sisu.
- Pakub lihtsat tõeväärtuslikku tulemust (`true`/`false`), mis sobib kaitsekontrolliks enne kahemõõtmeliste andmete
  töötlemist.

## Kasutus

### Süntaks

Funktsioon:

- `areFilledArrays(array)`

Parameetrid:

- `array`: Kontrollitav kahemõõtmeline massiiv.

### Funktsiooni kohalik import

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // tõene
console.log(areFilledArrays(b)); // tõene
console.log(areFilledArrays(c)); // tõene
console.log(areFilledArrays(d)); // väär
console.log(areFilledArrays(e)); // väär
console.log(areFilledArrays(f)); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areFilledArrays(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Fail loodi 6 February 2026 at 11:56:22 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>