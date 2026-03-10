# isMap

## Beschrijving

Controleert of de gegeven `value` een `Map` is, en retourneert `true` als dat zo is en anders `false`.

### Use case

Gebruik `isMap` wanneer je een `unknown` waarde ontvangt (bijv. uit JSON-parsing, externe API's of gebruikersinvoer) en
moet zekerstellen dat het een `Map` is voordat je `Map`-bewerkingen uitvoert.

> **Hint voor TypeScript-gebruikers:**
>
> `isMap` is een runtime-guard die `true` retourneert wanneer de waarde een `Map` is en anders `false`; gebruik het om
`unknown` te vernauwen voordat je `Map`-API's aanroept.

### Voordelen

- Biedt een snelle runtimecontrole om te bepalen of een waarde een `Map` is.
- Helpt typefouten te voorkomen door codepaden te bewaken die `Map`-methoden zoals `get`, `set` en `has` vereisen.
- Werkt goed als een lichte validatiestap bij het verwerken van `unknown`-invoer.

## Gebruik

### Syntax

Functie:

- `isMap(value)`

Parameters:

- `value`: De waarde om te controleren.

### Lokale functie-import

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isMap(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isMap](../_analysis/isMap.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 16:29:05 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>