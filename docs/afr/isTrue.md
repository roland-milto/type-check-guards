# isTrue

## Beskrywing

`isTrue` bepaal of 'n gegewe waarde streng gelyk is aan `true`.

### Gebruikscenario

Gebruik `isTrue` om vlae, funksieskakelaars, of konfigurasiewaardes te valideer waar slegs die letterlike `true` aanvaar
moet word en alles anders as `false` behandel moet word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isTrue` wanneer jy slegs die booleaanse letterlike `true` moet aanvaar, en nie bloot truthy-waardes nie.

### Voordele

- Verskaf 'n streng kontrole vir die booleaanse letterlike `true` (geen koërsering).
- Help om `true` te onderskei van truthy-waardes soos `1`, `"true"`, of `{}`.
- Eenvoudige, voorspelbare gedrag wat geskik is vir wagte en valideringspyplyne.

## Gebruik

### Sintaksis

Funksie:

- `isTrue(value)`

Parameters:

- `value`: Die waarde om te kontroleer.

### Plaaslike funksie-invoer

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // waar
const b = isTrue(1);         // vals
const c = isTrue("true");   // vals

if (isTrue(a)) {
  // a is hier waar
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isTrue(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 13:41:33 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>