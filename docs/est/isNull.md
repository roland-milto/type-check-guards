# isNull

## Kirjeldus

Määrab, kas antud `value` on `null`.

### Kasutusjuht

Kasuta `isNull`, et valideerida sisendeid või API payload’i välju, kus `null` on tähenduslik sentinelväärtus ja seda
tuleb käsitleda teisiti kui `undefined`-i või muid väärtusi.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isNull`, kui pead eristama `null`-i `undefined`-ist ja teistest väärväärtustest; see tagastab `true` ainult
`null`-i korral.

### Eelised

- Pakub täpset kontrolli `null`-i jaoks, ajamata seda segamini `undefined`-iga.
- Töötab usaldusväärselt mis tahes sisendtüübi korral, kuna aktsepteerib `unknown`-i.
- Lihtne, kiire ja kõrvalmõjudeta; tagastab ainult `true` või `false`.

## Kasutus

### Süntaks

Funktsioon:

- `isNull(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollida `null`-i suhtes.

### Funktsiooni kohalik import

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // tõene
console.log(isNull(b)); // väär

if (isNull(a)) {
  // a on siin null
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isNull(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isNull](../_analysis/isNull.md)

<br>

---

<small>Fail loodi 31 January 2026 at 15:39:05 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>