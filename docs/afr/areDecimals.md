# areDecimals

## Beskrywing

Kontroleer of alle elemente in 'n skikking desimale getalle is en die skikking gevul is, en gee `true` of `false` terug.

### Gebruikscenario

Valideer gebruiker-verskafte lyste (bv. CSV-kolomme of vorminsette) om te verseker dat die skikking nie leeg is nie en
elke inskrywing 'n desimale waarde is voordat ontleding of berekeninge gedoen word.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areDecimals` wanneer jy 'n vinnige booleaanse kontrole nodig het dat 'n `unknown[]` nie leeg is nie en elke
> element 'n desimale voorstelling is.

### Voordele

- Verseker dat die invoer 'n gevulde skikking is voordat items gevalideer word, wat toevallige aanvaarding van leë lyste
  voorkom.
- Valideer elke element met `isDecimal`, sodat gemengde of ongeldige waardes 'n onmiddellike `false`-resultaat
  veroorsaak.
- Bied 'n eenvoudige booleaanse uitkoms (`true`/`false`) wat geskik is vir wagte en vroeë-terugkeer-valideringsvloeie.

## Gebruik

### Sintaksis

Funksie:

- `areDecimals(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); // waar
console.log(areDecimals(b)); // vals
console.log(areDecimals(c)); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areDecimals(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areDecimals](../_analysis/areDecimals.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 15:56:14 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>