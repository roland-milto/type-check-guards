# isSet

## Beschrijving

Bepaalt of een gegeven waarde een `Set` is.

### Use case

Valideer invoer uit externe bronnen (bijv. JSON-parsing, gebruikersinvoer of API's van derden) om te zorgen dat een
waarde een `Set` is voordat je `Set`-bewerkingen uitvoert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isSet` om `unknown`-waarden te versmallen voordat je `Set`-specifieke API's aanroept zoals `.add`, `.has` of
`.size`.

### Voordelen

- Biedt een eenvoudige runtime-controle om te bevestigen of een waarde een `Set` is.
- Helpt typefouten te voorkomen door vroegtijdig te kunnen aftakken wanneer een waarde geen `Set` is.
- Werkt met elke `Set`-inhoud (leeg of gevuld) en retourneert consistent `true`/`false`.

## Gebruik

### Syntax

Functie:

- `isSet(value)`

Parameters:

- `value`: De waarde om te controleren.

### Lokale functie-import

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  // a is tijdens runtime een Set
  console.log(a.size);
}

console.log(isSet(b)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isSet(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isSet](../_analysis/isSet.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 23:10:37 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>