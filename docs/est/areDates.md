# areDates

## Kirjeldus

`areDates` määrab, kas antud massiiv on täidetud ja sisaldab ainult `Date` objekte, tagastades `true` ainult siis, kui
kõik elemendid on kehtivad kuupäevad.

### Kasutusjuht

Kasuta `areDates`, et valideerida tundmatut sisendit (nt parsitud JSON, vormiandmed, API payload’id) enne kuupäevapõhise
loogika käivitamist, nagu aja järgi sortimine, vormindamine või vahemike arvutamine.

> **Märkus TypeScripti kasutajatele:**
>
> Tagastab `true` ainult mittetühjade massiivide korral, kus iga element on `Date`; tühjad massiivid annavad `false`.

### Eelised

- Tagab, et massiiv ei ole tühi enne selle sisu valideerimist, vältides `true` tagastamist tühjade sisendite korral.
- Kontrollib, et iga element on `Date`-i eksemplar, tagastades esimesel mittevastavusel kohe `false`.
- Kasulik kaitse-stiilis kontrollina enne kuupäevapõhiste toimingute tegemist massiivi elementidega.

## Kasutus

### Süntaks

Funktsioon:

- `areDates(array)`

Parameetrid:

- `array`: Massiiv, mida kontrollitakse `Date` objektide suhtes.

### Funktsiooni kohalik import

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // tõene
console.log(areDates(b)); // väär
console.log(areDates(c)); // väär

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areDates(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areDates](../_analysis/areDates.md)

<br>

---

<small>Fail loodi 31 January 2026 at 15:30:06 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>