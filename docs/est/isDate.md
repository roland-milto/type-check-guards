# isDate

## Kirjeldus

`isDate` määrab, kas antud väärtus on `Date`, tagastades `true` `Date` eksemplaride korral ja muul juhul `false`.

### Kasutusjuht

Valideeri ja kitsenda tundmatuid väärtusi (nt päringuandmed, konfiguratsiooniväärtused või parsitud JSON) enne `Date`
-toimingute tegemist, nagu vormindamine, võrdlused või `toISOString()` väljakutsumine.

> **Märkus TypeScripti kasutajatele:**
>
> Kasuta `isDate`, et kitsendada `unknown` käitusajal tüübiks `Date`; see tagastab `true` ainult tegelike `Date`
> eksemplaride korral (mitte kuupäevastringide puhul).

### Eelised

- Pakub lihtsat käitusaja kaitset, et kontrollida, kas väärtus on `Date`.
- Aitab vältida tüübivigu, tagades, et valideerimise läbivad ainult `Date` eksemplarid.
- Kasulik tundmatute sisendite (nt API payload’ide) valideerimiseks enne kuupäevapõhiste meetodite kasutamist.

## Kasutus

### Süntaks

Funktsioon:

- `isDate(value)`

Parameetrid:

- `value`: Väärtus, mida kontrollitakse `Date` tüübi suhtes.

### Funktsiooni kohalik import

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input on siin Date
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.isDate(value)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [isDate](../_analysis/isDate.md)

<br>

---

<small>Fail loodi 31 January 2026 at 15:37:08 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>