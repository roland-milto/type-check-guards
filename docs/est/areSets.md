# areSets

## Kirjeldus

Kontrollib, kas antud mittetühi massiiv sisaldab ainult `Set`-i eksemplare, tagastades `true`, kui sisaldab, ja `false`
muul juhul.

### Kasutusjuht

Valideeri, et väärtus (nt kasutaja sisendist, JSON-i parsimisest või välistest API-dest) on mittetühi `Set`-objektide
massiiv enne iga hulga töötlemist.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areSets`, et valideerida tundmatu sisend enne iteratsiooni ja `Set` API-de (nt `.size`, `.has`, `.add`)
> kutsumist iga elemendi peal.

### Eelised

- Tagastab `true` ainult siis, kui sisend on mittetühi massiiv ja iga element on `Set`-i eksemplar.
- Väldib valepositiivseid tulemusi tühjade massiivide korral, tagastades `false`, kui massiivis pole ühtegi elementi.
- Kasulik käitusaja kontrollina enne `Set`-spetsiifiliste toimingute tegemist iga elemendiga.

## Kasutus

### Süntaks

Funktsioon:

- `areSets(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse `Set`-i eksemplaride suhtes.

### Funktsiooni kohalik import

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a on käitusajal Seti eksemplaride massiiv
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // väär
console.log(areSets(c)); // väär
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areSets(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areSets](../_analysis/areSets.md)

<br>

---

<small>Fail loodi 30 January 2026 at 23:13:11 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>