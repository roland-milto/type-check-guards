# areDecimals

## Kirjeldus

Kontrollib, kas kõik massiivi elemendid on kümnendarvud ja massiiv on täidetud, tagastades `true` või `false`.

### Kasutusjuht

Valideeri kasutaja esitatud loendeid (nt CSV veerge või vormisisendeid), et massiiv ei oleks tühi ja iga kirje oleks
kümnendväärtus enne parsimist või arvutusi.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areDecimals`, kui vajad kiiret tõeväärtuslikku kontrolli, et `unknown[]` ei oleks tühi ja iga element oleks
> kümnendkuju esitus.

### Eelised

- Tagab, et sisend on enne elementide valideerimist täidetud massiiv, vältides tühjade loendite juhuslikku
  aktsepteerimist.
- Valideerib iga elemendi funktsiooniga `isDecimal`, seega segatud või vigased väärtused annavad kohe tulemuseks
  `false`.
- Pakub lihtsat tõeväärtuslikku tulemust (`true`/`false`), mis sobib valvuriteks ja varajase tagastusega
  valideerimisvoogudeks.

## Kasutus

### Süntaks

Funktsioon:

- `areDecimals(array)`

Parameetrid:

- `array`: Kontrollitav massiiv.

### Funktsiooni kohalik import

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // tõene
console.log(areDecimals(b)); // väär
console.log(areDecimals(c)); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areDecimals(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Fail loodi 31 January 2026 at 15:56:57 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>