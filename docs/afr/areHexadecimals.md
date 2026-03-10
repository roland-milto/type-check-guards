# areHexadecimals

## Beskrywing

Kontroleer of alle elemente in 'n skikking heksadesimale strings is, en gee slegs `true` terug vir nie-leë skikkings
waar elke item geldig is.

### Gebruikscenario

Gebruik `areHexadecimals` om gebruikersinvoer of eksterne data (bv. ID's, kontrolesomme, kleurkodes sonder 'n
vooraanstaande '#') te valideer voordat heksadesimale ontleding of verdere verwerking gedoen word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areHexadecimals` om onbekende invoer te valideer voordat waardes ontleed of omgeskakel word (byvoorbeeld,
> voor `parseInt(value, 16)` of BigInt-omskakelings).

### Voordele

- Valideer dat elke element 'n heksadesimale string is en gee slegs `true` terug wanneer alle items ooreenstem.
- Verwerp leë skikkings by ontwerp en gee `false` terug vir ontbrekende invoerdata.
- Verskaf 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte en vroeë-terugkeer-validering.

## Gebruik

### Sintaksis

Funksie:

- `areHexadecimals(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir heksadesimale string-elemente.

### Plaaslike funksie-invoer

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areHexadecimals(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:05:22 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>