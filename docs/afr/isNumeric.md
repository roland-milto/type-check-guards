# isNumeric

## Beskrywing

`isNumeric` bepaal of ’n gegewe `value` as numeries beskou word deur sy opgeloste tipe teen `NUMERIC_TYPES` te toets.

### Gebruikscenario

Gebruik `isNumeric` om insette (bv. API-ladings, vormwaardes, konfigurasie) te valideer voordat numeriese bewerkings
uitgevoer word, en om numeries-agtige tipes (soos `BigInt`) konsekwent te aanvaar volgens `NUMERIC_TYPES`.

> **Wenk vir TypeScript-gebruikers:**
>
> `isNumeric` is ’n predikaat wat ’n boolean teruggee; hanteer dit as ’n runtime-kontrole vir of ’n waarde tot die
> biblioteek-gedefinieerde numeriese tipeset behoort.

### Voordele

- Gebruik `getTypeOf` saam met `NUMERIC_TYPES` om numeriese opsporingslogika te sentraliseer en kontroles konsekwent oor
  ’n kodebasis te hou.
- Gee ’n eenvoudige boolean (`true`/`false`) terug vir maklike vertakking en wag-agtige gebruik.
- Ondersteun veelvuldige numeriese voorstellings (bv. `number`, `BigInt`) soos gedefinieer deur `NUMERIC_TYPES`.

## Gebruik

### Sintaksis

Funksie:

- `isNumeric(value)`

Parameters:

- `value`: Die waarde om te kontroleer vir ’n numeriese tipe.

### Plaaslike funksie-invoer

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v word volgens die biblioteek se tipe-reëls as numeries beskou
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isNumeric(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 15:51:34 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>