# areMaps

## Beskrywing

`areMaps` bepaal of 'n gegewe skikking nie-leeg is en of al sy elemente `Map`-instansies is.

### Gebruikscenario

Valideer onbekende invoer (bv. vanaf JSON-ontleding, eksterne API's, of dinamiese bronne) voordat dit as 'n nie-leë lys
van `Map`-objekte behandel word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gee `false` terug vir 'n leë skikking; dit gee slegs `true` terug wanneer die skikking gevul is en elke element 'n
`Map` is.

### Voordele

- Verseker dat elke element 'n `Map`-instansie is, en gee slegs `true` terug wanneer die hele skikking die toets slaag.
- Verwerp leë skikkings by ontwerp, wat voorkom dat “geen data” per ongeluk as geldige invoer aanvaar word.
- Nuttig as 'n wag voordat `Map`-spesifieke bewerkings (bv. `.get()`, `.set()`, iterasie) oor 'n versameling uitgevoer
  word.

## Gebruik

### Sintaksis

Funksie:

- `areMaps(array)`

Parameters:

- `array`: Die skikking om na te gaan.

### Plaaslike funksie-invoer

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items is gewaarborg om tydens uitvoering 'n nie-leë skikking van Map-instansies te wees
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // vals vir: leë skikkings, of skikkings wat enige nie-Map-waarde bevat
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areMaps(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 16:11:34 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>