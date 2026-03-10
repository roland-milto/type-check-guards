# areNullOrUndefined

## Kirjeldus

Kontrollib, kas kõik antud massiivi elemendid on `null` või `undefined`.

### Kasutusjuht

Valideeri, et valikuliste väljade loend ei sisalda ühtegi tegelikku väärtust (ainult `null`/`undefined`), enne kui
otsustad töötlemise vahele jätta või kuvada oleku „väärtusi ei esitatud”.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areNullOrUndefined`, kui pead kontrollima, et massiiv sisaldab ainult puuduvaid väärtusi (`null`/`undefined`).
> Pane tähele, et tühja massiivi korral tagastab see `false`.

### Eelised

- Tagastab `true` ainult siis, kui iga element on `null` või `undefined`.
- Tagastab tühjade massiivide puhul `false`, aidates eristada „andmeid pole” ja „kõik väärtused puuduvad”.
- Töötab `unknown[]`-iga, muutes selle ohutuks kasutamiseks enne tüüpide kitsendamist.

## Kasutus

### Süntaks

Funktsioon:

- `areNullOrUndefined(array)`

Parameetrid:

- `array`: Kontrollitav massiiv.

### Funktsiooni kohalik import

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areNullOrUndefined(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:29:33 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>