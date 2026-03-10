# areMaps

## Kirjeldus

`areMaps` määrab, kas antud massiiv on mittetühi ja kõik selle elemendid on `Map`-i eksemplarid.

### Kasutusjuht

Valideeri tundmatu sisend (nt JSON-i parsimisest, välistest API-dest või dünaamilistest allikatest) enne, kui käsitled
seda mittetühja `Map`-objektide loendina.

> **Märkus TypeScripti kasutajatele:**
>
> Tagastab tühja massiivi korral `false`; `true` tagastatakse ainult siis, kui massiiv on täidetud ja iga element on
`Map`.

### Eelised

- Tagab, et iga element on `Map`-i eksemplar, tagastades `true` ainult siis, kui kogu massiiv läbib kontrolli.
- Lükkab tühjad massiivid teadlikult tagasi, vältides „andmete puudumise” juhuslikku aktsepteerimist kehtiva sisendina.
- Kasulik kaitsekontrollina enne `Map`-spetsiifiliste toimingute (nt `.get()`, `.set()`, iteratsioon) tegemist kogu
  kogumi ulatuses.

## Kasutus

### Süntaks

Funktsioon:

- `areMaps(array)`

Parameetrid:

- `array`: Kontrollitav massiiv.

### Funktsiooni kohalik import

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items on käitusajal garanteeritult mittetühi Map-i eksemplaride massiiv
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // väär: tühjade massiivide puhul või massiivide puhul, mis sisaldavad mõnda mitte-Map väärtust
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areMaps(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Fail loodi 31 January 2026 at 16:12:21 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>