# isWeakMap

## Kirjeldus

Määrab, kas antud `value` on `WeakMap`-i eksemplar.

### Kasutusjuht

Kasuta `isWeakMap`-i siis, kui võtad vastu `unknown` väärtuse (nt avalikust API-st, pluginate süsteemist või
dünaamilisest konfiguratsioonist) ja pead enne `WeakMap`-ile omase käitumise kasutamist kinnitama, et tegu on `WeakMap`
-iga.

> **Märkus TypeScripti kasutajatele:**
>
> `isWeakMap` teeb kontrolli `instanceof WeakMap`; see on käitusaja kaitse, mis tagastab `true` ainult tegelike
`WeakMap`-i eksemplaride korral.

### Eelised

- Lihtne käitusaja kontroll, kas väärtus on `WeakMap`.
- Aitab vältida API-de väärkasutust, mis nõuavad `WeakMap`-i, tagastades erindi viskamise asemel `true`/`false`.
- Töötab `unknown` sisenditega, muutes selle mugavaks moodulipiiridel (nt parsimine, välised andmed või tüübistamata
  kood).

## Kasutus

### Süntaks

Funktsioon:

- `isWeakMap(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a on käitusajal WeakMap
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isWeakMap(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>Fail loodi 30 January 2026 at 13:24:52 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>