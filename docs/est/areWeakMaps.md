# areWeakMaps

## Kirjeldus

`areWeakMaps` kontrollib, kas väärtus on mittetühi massiiv, mille iga element on `WeakMap`, tagastades `true` ainult sel
juhul ja muul juhul `false`.

### Kasutusjuht

Valideeri käitusaja andmeid (nt parsitud JSON, pluginate sisendid või lõdvalt tüübitud konfiguratsioon), et tagada, et
tegu on mittetühja `WeakMap`-i eksemplaride massiiviga enne itereerimist ja `WeakMap`-i meetodite kutsumist; tagastab
`false`, kui mõni element ei ole `WeakMap` või kui massiiv on tühi.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `areWeakMaps`-i tundmatu sisendi valideerimiseks enne, kui käsitled seda mittetühja `WeakMap[]`-ina; see
> tagastab tühjade massiivide korral `false`.

### Eelised

- Tagab, et iga antud massiivi element on `WeakMap`-i eksemplar.
- Tagastab tühjade massiivide korral `false`, vältides “andmete puudumise” juhuslikku aktsepteerimist kehtiva sisendina.
- Kasulik kaitsekontrollina enne `WeakMap`-ile spetsiifiliste toimingute tegemist kõigi elementidega.

## Kasutus

### Süntaks

Funktsioon:

- `areWeakMaps(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollida `WeakMap`-i eksemplaride suhtes.

### Funktsiooni kohalik import

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list on mittetühi WeakMapi eksemplaride massiiv
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ei ole mittetühi WeakMap[]
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areWeakMaps(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:36:59 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>