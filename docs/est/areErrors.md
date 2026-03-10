# areErrors

## Kirjeldus

Kontrollib, kas massiiv on mittetühi ja sisaldab ainult `Error`-objekte, tagastades `true` või `false`.

### Kasutusjuht

Valideeri, et käitusajal saadud `unknown[]` (nt koondatud ebaõnnestumised, valideerimistulemused või deserialiseeritud
andmed) on mittetühi `Error`-objektide loend enne iteratsiooni, logimist või uuesti viskamist.

> **Märkus TypeScripti kasutajatele:**
>
> `areErrors` tagastab `true` ainult täidetud massiivi korral, kus iga element on `Error`; see tagastab `false` tühja
> massiivi korral või kui mõni element ei ole `Error`.

### Eelised

- Tagab, et iga element on `Error`-i eksemplar, võimaldades turvalist veakäsitlust ja logimist.
- Lükkab tagasi tühjad massiivid, vältides olukorda, kus juhuslikku „vigu pole” seisu käsitletakse kehtiva vealoendina.
- Toimib hästi käitusaja kaitsemehhanismina, kui tegeletakse `unknown[]` sisenditega (nt API-dest või `catch`
  -plokkidest).

## Kasutus

### Süntaks

Funktsioon:

- `areErrors(array)`

Parameetrid:

- `array`: Kontrollitav massiiv `Error`-objektide suhtes.

### Funktsiooni kohalik import

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value on mittetühi Error-objektide massiiv
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areErrors(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Fail loodi 6 February 2026 at 12:33:24 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>