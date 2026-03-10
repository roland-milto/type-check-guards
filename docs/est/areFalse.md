# areFalse

## Kirjeldus

`areFalse` kontrollib, kas kõik etteantud massiivi elemendid on rangelt boole'i väärtus `false`.

### Kasutusjuht

Valideeri, et funktsioonilippude, kontrollide või kaitsete tulemuste loend on enne jätkamist kõik `false` (nt kinnita,
et blokeerivaid tingimusi ei esine).

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areFalse`, kui vajad ranget valideerimist, et massiiv ei oleks tühi ja sisaldaks ainult boole'i väärtust
`false`.

### Eelised

- Tagab, et iga element on rangelt `false` (ilma tõese/vale väärtuse sundteisenduseta).
- Tagastab `false` mitte-massiivide või tühjade massiivide korral, nõudes `isFilledArray` abil täidetud massiivi.
- Tõhususe huvides lõpetab varakult esimese mitte-`false` elemendi leidmisel.

## Kasutus

### Süntaks

Funktsioon:

- `areFalse(array)`

Parameetrid:

- `array`: Kontrollitav massiiv, mis sisaldab mis tahes tüüpi elemente.

### Funktsiooni kohalik import

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // tõene
const b = areFalse([false, true, false]);  // väär
const c = areFalse([false, "false", false]); // väär
const d = areFalse([]); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areFalse(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Fail loodi 31 January 2026 at 16:16:48 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>