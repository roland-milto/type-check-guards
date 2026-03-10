# areRegExes

## Beschrijving

`areRegExes` controleert of een waarde een gevulde array is die alleen `RegExp`-objecten bevat.

### Use case

Valideer dat een configuratieoptie (bijv. een lijst met allow/deny-patronen) een niet-lege array van reguliere
expressies is voordat je deze gebruikt voor matching.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areRegExes` om `unknown` te vernauwen naar `RegExp[]` voordat je iterereert of patronen samenstelt.

### Voordelen

- Zorgt ervoor dat een waarde een niet-lege array is waarbij elk element een `RegExp`-instantie is.
- Biedt een eenvoudige booleaanse guard (`true`/`false`) voor het valideren van gebruikersinvoer of configuratie.
- Helpt runtimefouten te voorkomen wanneer latere code ervan uitgaat dat alle items reguliere-expressie-operaties
  ondersteunen.

## Gebruik

### Syntax

Functie:

- `areRegExes(array)`

Parameters:

- `array`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // patterns is hier een array van RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areRegExes(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:20:18 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>