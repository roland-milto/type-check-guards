# isOneOfType

## Beskrywing

`isOneOfType` bepaal of 'n gegewe `value` met ten minste een van die verskafte tipe-stringe ooreenstem, en gee `true`
terug as enige passing gevind word en `false` andersins.

### Gebruikscenario

Valideer los-getipe of eksterne data (bv. geparste JSON, navraagparameters) deur verskeie aanvaarbare runtime-tipes (
soos `number` of `string`) toe te laat voordat jy met verdere logika voortgaan.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isOneOfType` wanneer jy 'n runtime-kontrole wil hê dat 'n waarde met enige van verskeie toegelate tipes
> ooreenstem; dit gee `true` terug as ten minste een tipe pas, anders `false`.

### Voordele

- Kontroleer 'n waarde teen verskeie toegelate tipes in 'n enkele oproep, en gee `true` terug by die eerste passing.
- Werk met `unknown`-insette, wat dit nuttig maak by runtime-grense (bv. eksterne data, gebruikersinvoer).
- Eenvoudige booleaanse resultaat (`true`/`false`) wat goed saamstel met voorwaardelike logika en vroeë terugkeer.

## Gebruik

### Sintaksis

Funksie:

- `isOneOfType(value, types)`

Parameters:

- `value`: Die waarde wat teen die gespesifiseerde tipes nagegaan moet word.
- `types`: 'n Skikking van tipe-stringe wat die moontlike tipes van die waarde verteenwoordig.

### Plaaslike funksie-invoer

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // invoer is 'n objek tydens uitvoering
}

console.log(isOneOfType(3, ["number", "string"])); // waar
console.log(isOneOfType("hello", ["number", "boolean"])); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isOneOfType(value, types)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 23:42:18 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>