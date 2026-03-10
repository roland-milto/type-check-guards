# areEqual

## Kirjeldus

`areEqual` kontrollib, kas kõik massiivi elemendid on võrdsed etteantud oodatud väärtusega, tagastades `true` ainult
mitte-tühjade massiivide korral, kus iga üksus vastab.

### Kasutusjuht

Valideeri, et loend sisaldab ainult üht lubatud väärtust (nt kõik olekulipud on `true`, kõik rollid on `"admin"` või
kõik arvulised kirjed võrduvad nõutud konstandiga), käsitledes tühja sisendit kehtetuna (`false`).

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areEqual`, kui vajad ranget kõigi üksuste kontrolli; see tagastab `false` tühjade massiivide ning mis tahes
> mitte-massiivi või mitte-täidetud sisendi korral.

### Eelised

- Tagastab `true` ainult siis, kui iga element vastab oodatud väärtusele; vastasel juhul tagastab `false`.
- Ebaõnnestub kiiresti: lõpetab kontrollimise kohe, kui leitakse mittevastav element.
- Kaitseb vigase sisendi eest, tagastades `false`, kui sisend ei ole täidetud massiiv.

## Kasutus

### Süntaks

Funktsioon:

- `areEqual(value, expected)`

Parameetrid:

- `value`: Kontrollitav massiiv.
- `expected`: Element, millega võrreldakse iga massiivi üksust.

### Funktsiooni kohalik import

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areEqual(value, expected)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Fail loodi 31 January 2026 at 23:50:17 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>