# areHexadecimals

## Kirjeldus

Kontrollib, kas kõik massiivi elemendid on kuueteistkümnendsüsteemi stringid, tagastades `true` ainult mittetühjade
massiivide korral, kus iga element on kehtiv.

### Kasutusjuht

Kasuta `areHexadecimals`, et valideerida kasutaja sisendit või väliseid andmeid (nt ID-d, kontrollsummad, värvikoodid
ilma algava '#'-ta) enne kuueteistkümnendsüsteemi parsimist või edasist töötlemist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areHexadecimals`, et valideerida tundmatu sisend enne parsimist või väärtuste teisendamist (näiteks enne
`parseInt(value, 16)` või BigInt-teisendusi).

### Eelised

- Valideerib, et iga element on kuueteistkümnendsüsteemi string, ja tagastab `true` ainult siis, kui kõik elemendid
  vastavad.
- Lükkab tühjad massiivid disaini järgi tagasi, tagastades puuduva sisendandmestiku korral `false`.
- Pakub lihtsat tõeväärtuslikku tulemust (`true`/`false`), mis sobib valvuriteks ja varajase tagastusega
  valideerimiseks.

## Kasutus

### Süntaks

Funktsioon:

- `areHexadecimals(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse kuueteistkümnendsüsteemi stringelementide suhtes.

### Funktsiooni kohalik import

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areHexadecimals(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:05:57 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>