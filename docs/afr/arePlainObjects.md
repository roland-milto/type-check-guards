# arePlainObjects

## Beskrywing

Kontroleer of alle elemente van 'n skikking gewone objekte is, en gee `true` terug slegs as elke element kwalifiseer.

### Gebruikscenario

Valideer eksterne of ongetipeerde data (bv. ontlede JSON, API-ladings, vorminskrywings) om te verseker jy het 'n nie-leë
skikking ontvang waar elke inskrywing 'n gewone objek is voordat jy daaroor iterer en eienskappe lees.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `arePlainObjects` om onbekende insette te valideer voordat jy dit as `Record<string, unknown>[]` (of 'n
> strenger objekvorm) in TypeScript hanteer.

### Voordele

- Verseker dat elke element in die invoerskikking 'n gewone objek is, en gee slegs `true` terug wanneer alle items
  ooreenstem.
- Wys ongeldige insette vroeg af (nie-skikkings of leë skikkings) deur `false` terug te gee.
- Behandel beide objek-letterlike objekte en `Object.create(null)`-objekte as geldige gewone objekte.

## Gebruik

### Sintaksis

Funksie:

- `arePlainObjects(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir gewone objek-elemente.

### Plaaslike funksie-invoer

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // waar
const b = arePlainObjects([{}, Object.create(null)]); // waar
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // vals
const d = arePlainObjects([] as unknown[]); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.arePlainObjects(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 16:24:14 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>