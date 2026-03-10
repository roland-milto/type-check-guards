# isUndefined

## Beskrywing

Kontroleer of 'n gegewe waarde `undefined` is.

### Gebruikscenario

Gebruik `isUndefined` om opsionele insette te bewaak, ontbrekende eienskappe op te spoor, of te onderskei tussen “nie
verskaf nie” (`undefined`) en “uitdruklik leeg” (`null`).

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isUndefined` wanneer jy spesifiek `undefined` (nie `null` nie) moet opspoor. Dit is veilig omdat dit op
`typeof value === "undefined"` staatmaak.

### Voordele

- Bied 'n duidelike, eksplisiete toets vir `undefined` met behulp van `typeof`, en vermy randgevalle met onverklaarde
  veranderlikes.
- Gee 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte, vertakking en valideringslogika.
- Help om `undefined` te onderskei van ander “leë” waardes soos `null`, `0`, `""` of `NaN`.

## Gebruik

### Sintaksis

Funksie:

- `isUndefined(value)`

Parameters:

- `value`: Die waarde wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x is hier ongedefinieer
} else {
  // x is hier nie ongedefinieer nie
}

const a = isUndefined(undefined); // waar
const b = isUndefined(null);      // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isUndefined(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 14:01:49 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>