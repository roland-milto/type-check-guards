# areValidDates

## Beskrywing

Bepaal of 'n skikking nie leeg is nie en volledig uit geldige `Date`-objekte bestaan.

### Gebruikscenario

Gebruik `areValidDates` om deur gebruikers-verskafte of API-verskafte skikkings te valideer voordat jy datumgebaseerde
bewerkings (sortering, reeks-kontroles, formatering) uitvoer, en verseker dat alle inskrywings werklike, geldige `Date`
-objekte is en dat die lys nie leeg is nie.

> **Wenk vir TypeScript-gebruikers:**
>
> `areValidDates` gee `false` terug vir 'n leë skikking; maak seker die skikking is bedoel om nie leeg te wees nie
> voordat jy daarop staatmaak as 'n valideringsstap.

### Voordele

- Gee `true` terug slegs wanneer elke element 'n geldige `Date`-instansie is (geen ongeldige datums soos
  `new Date('invalid')`).
- Verwerp leë invoer deur `false` terug te gee, wat verseker dat jy slegs betekenisvolle, nie-leë datumlyste aanvaar.
- Bied 'n eenvoudige booleaanse guard-styl kontrole wat maklik is om met ander validerings te kombineer.

## Gebruik

### Sintaksis

Funksie:

- `areValidDates(array)`

Parameters:

- `array`: Die skikking om te kontroleer, wat moontlik `Date`-objekte kan bevat.

### Plaaslike funksie-invoer

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // waar
console.log(areValidDates(b)); // vals
console.log(areValidDates(c)); // vals
console.log(areValidDates(d)); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areValidDates(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:30:35 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>