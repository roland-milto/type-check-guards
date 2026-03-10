# isString

## Beschrijving

`isString` bepaalt of een gegeven waarde een string is.

### Use case

Valideer gebruikersinvoer, velden in API-payloads of configuratiewaarden tijdens runtime om te garanderen dat een waarde
een string is voordat je stringbewerkingen toepast (bijv. trimmen, splitsen, hoofd-/kleine letters omzetten).

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isString` om `unknown` of losjes getypeerde waarden te valideren voordat je stringmethoden aanroept; het
> retourneert alleen `true` wanneer `typeof value === "string"`.

### Voordelen

- Eenvoudige en snelle controle met `typeof`.
- Geeft een voorspelbaar booleaans resultaat: `true` voor strings, anders `false`.
- Werkt voor zowel lege als niet-lege strings.
- Handig als een lichte runtime-guard voordat je string-specifieke bewerkingen uitvoert.

## Gebruik

### Syntax

Functie:

- `isString(value)`

Parameters:

- `value`: De waarde die getest moet worden op het stringtype.

### Lokale functie-import

```ts
import { isString } from "@type-check/guards";

const input: unknown = "Hello World";

if (isString(input)) {
  // input is hier een string
  console.log(input.toUpperCase());
} else {
  console.log("Not a string");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isString(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isString](../_analysis/isString.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:14:57 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>