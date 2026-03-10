# areDates

## Beskrywing

`areDates` bepaal of 'n gegewe skikking gevul is en slegs `Date`-objekte bevat, en gee `true` terug slegs wanneer alle
elemente geldige datums is.

### Gebruikscenario

Gebruik `areDates` om onbekende insette (bv. ontlede JSON, vormdata, API-ladings) te valideer voordat datumspesifieke
logika soos sorteer volgens tyd, formatering, of die berekening van reekse uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gee `true` terug slegs vir nie-leë skikkings waar elke element 'n `Date` is; leë skikkings lewer `false`.

### Voordele

- Verseker dat 'n skikking nie leeg is voordat die inhoud daarvan gevalideer word nie, wat `true` vir leë insette
  voorkom.
- Verifieer dat elke element 'n `Date`-instansie is, en gee onmiddellik `false` terug by die eerste wanpassing.
- Nuttig as 'n wagstyl-kontrole voordat datumspesifieke bewerkings op skikkingitems uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `areDates(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir `Date`-objekte.

### Plaaslike funksie-invoer

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // waar
console.log(areDates(b)); // vals
console.log(areDates(c)); // vals

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areDates(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areDates](../_analysis/areDates.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 15:29:19 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>