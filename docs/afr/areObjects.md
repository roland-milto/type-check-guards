# areObjects

## Beskrywing

`areObjects` kontroleer of 'n verskafte gevulde skikking slegs objekte bevat.

### Gebruikscenario

Gebruik `areObjects` wanneer jy 'n onbekende skikking ontvang (bv. vanaf JSON-ontleding of eksterne API's) en moet
verseker dat dit nie leeg is nie en dat elke element 'n objek is voordat jy daaroor iterer en objek-eienskappe benader.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areObjects` om `unknown[]` te valideer voordat items as objekte hanteer word; dit gee `false` terug vir leë
> skikkings.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n gevulde skikking is en elke element 'n objek is.
- Stop vroeg en gee `false` terug sodra 'n nie-objek element gevind word.
- Help om onbekende invoer te valideer voordat objek-spesifieke bewerkings uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `areObjects(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir objek-elemente.

### Plaaslike funksie-invoer

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // waarde is 'n gevulde skikking van voorwerpe
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areObjects(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:07:54 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>