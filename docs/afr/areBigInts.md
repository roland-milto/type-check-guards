# areBigInts

## Beskrywing

`areBigInts` bepaal of 'n waarde 'n nie-leë skikking is wat slegs `bigint`-waardes bevat.

### Gebruikscenario

Valideer onbekende insette (bv. ontlede JSON-agtige data, API-ladings, of funksieparameters getipeer as `unknown`) om te
verseker dit is 'n nie-leë skikking van `bigint`-waardes voordat dit verwerk word; gee slegs `true` terug wanneer alle
elemente `bigint` is, anders `false`.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areBigInts` as 'n runtime-bewaker voordat jy `bigint`-slegs bewerkings (bv. rekenkunde, vergelykings) op
> onbekende insette uitvoer.

### Voordele

- Verseker dat elke element 'n `bigint` is, en gee slegs `true` terug wanneer die hele skikking ooreenstem.
- Verwerp nie-skikkings en leë skikkings by ontwerp (via `isFilledArray`), wat toevallige aanvaarding van ongeldige
  insette voorkom.
- Vinnige mislukking: gee `false` terug sodra 'n nie-`bigint`-element gevind word.

## Gebruik

### Sintaksis

Funksie:

- `areBigInts(array)`

Parameters:

- `array`: Die waarde om na te gaan.

### Plaaslike funksie-invoer

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // waar
console.log(areBigInts(b)); // vals
console.log(areBigInts(c)); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areBigInts(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:25:07 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>