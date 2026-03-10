# areObjects

## Kirjeldus

`areObjects` kontrollib, kas etteantud täidetud massiiv sisaldab ainult objekte.

### Kasutusjuht

Kasuta `areObjects`, kui saad tundmatu massiivi (nt JSON-i parsimisest või välistest API-dest) ja pead enne iteratsiooni
ning objektiväljadele ligipääsu tagama, et see ei ole tühi ja et iga element on objekt.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areObjects`, et valideerida `unknown[]` enne, kui käsitled elemente objektidena; see tagastab tühjade
> massiivide korral `false`.

### Eelised

- Tagastab `true` ainult siis, kui sisend on täidetud massiiv ja iga element on objekt.
- Lõpetab varakult ja tagastab `false` niipea, kui leitakse mitte-objektist element.
- Aitab valideerida tundmatut sisendit enne objektipõhiste toimingute tegemist.

## Kasutus

### Süntaks

Funktsioon:

- `areObjects(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse objektielementide suhtes.

### Funktsiooni kohalik import

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value on objektidega täidetud massiiv
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areObjects(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:08:31 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>