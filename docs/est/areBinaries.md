# areBinaries

## Kirjeldus

Kontrollib, kas antud väärtus on mittetühi kehtivate binaarsete stringide massiiv, ja tagastab `true` ainult siis, kui
kõik elemendid läbivad valideerimise.

### Kasutusjuht

Kasuta `areBinaries`, kui saad tundmatu loendi (nt JSON-ist, vormidest või API-dest) ja pead enne parsimist või
töötlemist veenduma, et see on mittetühi binaarsete stringide massiiv.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areBinaries`, et valideerida tundmatu sisend enne binaarsete stringide teisendamist arvudeks/BigInt-ideks; see
> tagab, et massiiv on mittetühi ja iga element on kehtiv binaarne string.

### Eelised

- Kontrollib, et väärtus on mittetühi massiiv, kus iga element on kehtiv binaarne string.
- Tagastab lihtsa tõeväärtuse (`true`/`false`), mis sobib valvuriteks, varajasteks tagastusteks ja sisendi
  valideerimiseks.
- Hoiab ära hilisemad parsimisvead, lükates tagasi massiivid, mis sisaldavad mõnda mittebinaarset kirjet.

## Kasutus

### Süntaks

Funktsioon:

- `areBinaries(array)`

Parameetrid:

- `array`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // tõene
console.log(areBinaries(b)); // väär
console.log(areBinaries([])); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areBinaries(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:14:20 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>