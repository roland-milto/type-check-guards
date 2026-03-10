# arePrimitives

## Kirjeldus

`arePrimitives` hindab, kas kõik antud mittetühja massiivi elemendid on primitiivsed tüübid.

### Kasutusjuht

Valideeri, et saabuvad andmed (nt päringuparameetrid, CSV rea väärtused või ID-de/siltide loend) sisaldavad enne
serialiseerimist, räsimist, logimist või API-dele edastamist ainult primitiivseid väärtusi, kui need ei tohi objekte
vastu võtta.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `arePrimitives`, kui pead enne edasist töötlemist veenduma, et `unknown[]` sisaldab ainult primitiivseid
> väärtusi (string, number, bigint, boolean, symbol, undefined või null).

### Eelised

- Tagastab `true` ainult siis, kui iga element on primitiivne väärtus, muutes selle rangeks kaitseks „ilma
  objektide/funktsioonideta” massiivide jaoks.
- Ebaõnnestub kiiresti: tagastab `false` niipea, kui leitakse mitteprimitiivne element.
- Tagastab `false` ka mitte-massiivide ja tühjade massiivide korral (täidetud massiivi kontrolli kaudu), vältides
  kehtetu sisendi juhuslikku aktsepteerimist.

## Kasutus

### Süntaks

Funktsioon:

- `arePrimitives(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse primitiivset tüüpi elementide suhtes.

### Funktsiooni kohalik import

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // tõene
const r2 = arePrimitives(b); // tõene
const r3 = arePrimitives(c); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.arePrimitives(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Fail loodi 31 January 2026 at 00:04:20 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>