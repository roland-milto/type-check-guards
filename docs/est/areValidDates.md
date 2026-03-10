# areValidDates

## Kirjeldus

Määrab, kas massiiv on mittetühi ja koosneb täielikult kehtivatest `Date`-objektidest.

### Kasutusjuht

Kasuta `areValidDates` kasutaja või API poolt antud massiivide valideerimiseks enne kuupäevapõhiste toimingute (
sorteerimine, vahemikukontrollid, vormindamine) tegemist, tagades, et kõik kirjed on päris, kehtivad `Date`-objektid ja
et loend ei ole tühi.

> **Märkus TypeScripti kasutajatele:**
>
> `areValidDates` tagastab tühja massiivi korral `false`; veendu, et massiiv on mõeldud mittetühjaks, enne kui sellele
> valideerimissammuna toetuda.

### Eelised

- Tagastab `true` ainult siis, kui iga element on kehtiv `Date`-i instants (ei sisalda vigaseid kuupäevi nagu
  `new Date('invalid')`).
- Lükkab tühja sisendi tagasi, tagastades `false`, tagades, et aktsepteerid ainult sisukaid, mittetühje
  kuupäevaloendeid.
- Pakub lihtsat boole'i kaitse-stiilis kontrolli, mida on lihtne kombineerida teiste valideerimistega.

## Kasutus

### Süntaks

Funktsioon:

- `areValidDates(array)`

Parameetrid:

- `array`: Kontrollitav massiiv, mis võib sisaldada `Date`-objekte.

### Funktsiooni kohalik import

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // tõene
console.log(areValidDates(b)); // väär
console.log(areValidDates(c)); // väär
console.log(areValidDates(d)); // väär

```

### Objekti globaalne import

Funktsioonide importimiseks globaalsel objektimeetodina kasuta:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Järgmine meetod on seejärel globaalselt saadaval:

- `Type.areValidDates(array)`

## Funktsioonide analüüs

Siin on dokumenteeritud tabelanalüüs väljundi kohta, mis tekib erinevate parameetrite sisestamisel
funktsioonidesse: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Fail loodi 30 January 2026 at 14:31:30 (UTC), kasutades *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**-it, autor *
*[Roland Milto](https://roland-milto.de/)**.</small>