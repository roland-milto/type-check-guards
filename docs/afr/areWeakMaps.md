# areWeakMaps

## Beskrywing

`areWeakMaps` kontroleer of 'n waarde 'n nie-leë skikking is waar elke element 'n `WeakMap` is, en gee slegs in daardie
geval `true` terug en andersins `false`.

### Gebruikscenario

Valideer looptyddata (bv. geparste JSON, inprop-insette, of losweg getipe konfigurasie) om te verseker dit is 'n nie-leë
skikking van `WeakMap`-instansies voordat daaroor geïtereer word en `WeakMap`-metodes geroep word; gee `false` terug
wanneer enige element nie 'n `WeakMap` is nie of wanneer die skikking leeg is.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areWeakMaps` om onbekende invoer te valideer voordat dit as 'n nie-leë `WeakMap[]` hanteer word; dit gee
`false` terug vir leë skikkings.

### Voordele

- Verseker dat elke element in die verskafde skikking 'n `WeakMap`-instansie is.
- Gee `false` terug vir leë skikkings, wat toevallige aanvaarding van “geen data” as geldige invoer voorkom.
- Nuttig as 'n wag voor `WeakMap`-spesifieke bewerkings op alle items uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `areWeakMaps(array)`

Parameters:

- `array`: Die skikking om na te gaan vir `WeakMap`-instansies.

### Plaaslike funksie-invoer

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // lys is 'n nie-leë skikking van WeakMap-instansies
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // nie 'n nie-leë WeakMap[] nie
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areWeakMaps(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:36:03 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>