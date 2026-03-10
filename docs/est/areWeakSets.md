# areWeakSets

## Kirjeldus

Kontrollib, kas sisend on mittetühi massiiv, mille iga element on `WeakSet`, tagastades `true` ainult sel juhul.

### Kasutusjuht

Valideeri käitusaja sisend (nt API-dest, konfiguratsioonist või kasutaja esitatud andmetest), et tagada mittetühi
`WeakSet`-i eksemplaride loend enne loogika jätkamist, mis sõltub `WeakSet`-i käitumisest.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areWeakSets`, et valideerida tundmatu sisend enne, kui käsitled seda kui `WeakSet[]`. See tagastab tühjade
> massiivide ja mittemassiivide korral `false`.

### Eelised

- Tagab, et iga sisendmassiivi element on `WeakSet`.
- Tagastab tühjade massiivide korral `false`, vältides puuduva andmestiku puhul juhuslikke „kõik kehtivad” tulemusi.
- Ebaõnnestub turvaliselt, tagastades `false`, kui sisend ei ole täidetud massiiv (sh `null`).
- Kasulik kaitsekontrollina enne toiminguid, mis nõuavad `WeakSet`-i eksemplare.

## Kasutus

### Süntaks

Funktsioon:

- `areWeakSets(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse `WeakSet`-objektide suhtes.

### Funktsiooni kohalik import

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a on mittetühi WeakSeti eksemplaride massiiv
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areWeakSets(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:08:25 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>