# areNull

## Kirjeldus

Kontrollib, kas kõik antud `array` elemendid on `null`.

### Kasutusjuht

Valideeri, et andmestiku veerg, API väljade loend või kohatäitemassiiv sisaldab ainult `null`-väärtusi enne loogika
rakendamist, mis eeldab, et kõik kirjed on tahtlikult tühjad.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areNull`, kui vajad ranget kontrolli, et sisend on mittetühi massiiv ja iga element on täpselt `null` (mitte
`undefined`, mitte väärväärtused).

### Eelised

- Tagastab `true` ainult siis, kui iga element on `null`, muutes selle rangeks „kõik vastavad” kaitseks.
- Lükkab tagasi mitte-massiivid ja tühjad massiivid, tagastades `false`, vältides juhuslikke tõeseid tulemusi vigase
  sisendi korral.
- Sobib hästi eeltingimuse kontrolliks enne andmete töötlemist, mis peavad olema täielikult `null`.

## Kasutus

### Süntaks

Funktsioon:

- `areNull(array)`

Parameetrid:

- `array`: Sisendmassiiv, mida kontrollitakse `null`-elementide suhtes.

### Funktsiooni kohalik import

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); // tõene
const allNullB = areNull(b); // väär

const notAnArray = areNull(123 as unknown as unknown[]); // väär
const empty = areNull([]); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areNull(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areNull](../_analysis/areNull.md)

<br>

---

<small>Fail loodi 31 January 2026 at 15:43:04 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>