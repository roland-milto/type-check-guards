# areNaNs

## Kirjeldus

`areNaNs` kontrollib, kas kõik massiivi elemendid on `NaN`, ja tagastab `true` ainult siis, kui iga element on `NaN`.

### Kasutusjuht

Valideeri sissetulevaid andmeid, kus `NaN`-i kasutatakse tähisväärtusena, ja pead tagama, et kogu massiiv koosneb
eranditult `NaN`-ist (nt täielikult puuduvate väärtustega arvulise seeria tuvastamine).

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areNaNs`, kui pead valideerima, et massiiv sisaldab ainult arvulist `NaN` väärtust (ilma stringist numbriks
> teisendamiseta).

### Eelised

- Tagastab `true` ainult siis, kui iga element on `NaN` (range kõigi elementide kontroll).
- Ei teisenda stringe numbriteks; väärtused nagu "NaN" jäävad mitte-`NaN`-iks ja muudavad tulemuse `false`-iks.
- Tagastab `false` täitmata massiivide korral, vältides juhuslikku `true`-tühja sisendi puhul.

## Kasutus

### Süntaks

Funktsioon:

- `areNaNs(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida `NaN` väärtuste suhtes.

### Funktsiooni kohalik import

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // tõene
const b = areNaNs([NaN, 1, NaN]); // väär
const c = areNaNs([NaN, "NaN", NaN]); // väär
const d = areNaNs([NaN, null, NaN]); // väär
const e = areNaNs([] as unknown[]); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areNaNs(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Fail loodi 30 January 2026 at 15:51:13 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>