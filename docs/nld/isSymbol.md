# isSymbol

## Beschrijving

`isSymbol` bepaalt of een gegeven waarde van het type `symbol` is, en retourneert `true` voor symbolen en anders
`false`.

### Use case

Valideer dat een `unknown`-waarde een `symbol` is voordat je deze gebruikt als een unieke identifier, een
registry-sleutel of een berekende property-sleutel in objecten en maps.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isSymbol` om `unknown` te verfijnen naar `symbol` voordat je symboolgerelateerde functies aanroept of het
> gebruikt als een berekende property-sleutel.

### Voordelen

- Biedt een eenvoudige, betrouwbare runtime-controle voor het JavaScript-primitieve type `symbol`.
- Helpt `unknown`-waarden te verfijnen voordat je symboolspecifieke API's gebruikt of ze als sleutels opslaat.
- Voorkomt fout-positieven door `typeof` te gebruiken, wat de canonieke manier is om `symbol`-waarden te detecteren.

## Gebruik

### Syntax

Functie:

- `isSymbol(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input is hier een symbool
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isSymbol(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:27:59 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>