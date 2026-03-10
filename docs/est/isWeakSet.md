# isWeakSet

## Kirjeldus

Määrab, kas antud `value` on objektide `WeakSet`.

### Kasutusjuht

Kasuta `isWeakSet`, kui võtad vastu tüübistamata sisendi (nt väliste API-de, dünaamilise konfiguratsiooni või `unknown`
väärtuste kaudu) ja pead enne `WeakSet`-ile omaste toimingute kasutamist kontrollima, et tegu on `WeakSet`-iga.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isWeakSet`, et kitsendada `unknown` väärtus käitusajal tüübiks `WeakSet<object>`; pane tähele, et `WeakSet`
> saab sisaldada ainult objektiviiteid.

### Eelised

- Pakub lihtsat käitusaja kontrolli, kas väärtus on `WeakSet`.
- Aitab vältida tüübivigu, tagades, et ainult `WeakSet`-i eksemplare käsitletakse sellistena.
- Töötab mis tahes `unknown` sisendiga ja tagastab selge tõeväärtuse (`true`/`false`).

## Kasutus

### Süntaks

Funktsioon:

- `isWeakSet(value)`

Parameetrid:

- `value`: Kontrollitav väärtus.

### Funktsiooni kohalik import

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // tõene
console.log(isWeakSet(b)); // väär

if (isWeakSet(a)) {
  // a on käitusajal WeakSet
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isWeakSet(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:14:35 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>