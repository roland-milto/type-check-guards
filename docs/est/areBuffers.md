# areBuffers

## Kirjeldus

`areBuffers` kontrollib, kas antud väärtus on mitte-tühi, täidetud massiiv, mille iga element on `Buffer`, tagastades
sel juhul `true` ja muul juhul `false`.

### Kasutusjuht

Valideeri saabuvad tükkide massiivid (nt voogudest, failide üleslaadimistest või võrgupakettidest), et tagada kõigi
osade `Buffer`-i instantsid enne ühendamist, dekodeerimist või nende edastamist krüptograafilistele või
binaartöötlusfunktsioonidele.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areBuffers`, et valideerida `unknown[]` enne Buffer-spetsiifiliste API-de (nt `Buffer.concat`) kutsumist,
> tagades, et funktsioon tagastab `true` ainult siis, kui iga element on `Buffer`.

### Eelised

- Tagab, et iga sisendi element on Node.js `Buffer`-i instants, tagastades `true` ainult siis, kui kogu massiiv vastab
  tingimusele.
- Lükkab vigased sisendid varakult tagasi, nõudes mitte-tühja, täidetud massiivi; tagastab `false` tühjade massiivide
  või mittemassiivide korral.
- Kasulik kaitsekontrollina enne ainult puhvritega tehtavaid toiminguid (nt ühendamine, räsimine, binaarprotokollid).

## Kasutus

### Süntaks

Funktsioon:

- `areBuffers(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse puhvriinstantside suhtes.

### Funktsiooni kohalik import

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areBuffers(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Fail loodi 31 January 2026 at 16:24:58 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>