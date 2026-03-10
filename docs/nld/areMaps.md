# areMaps

## Beschrijving

`areMaps` bepaalt of een gegeven array niet leeg is en of al zijn elementen `Map`-instanties zijn.

### Use case

Valideer onbekende invoer (bijv. uit JSON-parsing, externe API’s of dynamische bronnen) voordat je deze behandelt als
een niet-lege lijst met `Map`-objecten.

> **Hint voor TypeScript-gebruikers:**
>
> Retourneert `false` voor een lege array; het retourneert alleen `true` wanneer de array gevuld is en elk element een
`Map` is.

### Voordelen

- Zorgt ervoor dat elk element een `Map`-instantie is en retourneert alleen `true` wanneer de volledige array de
  controle doorstaat.
- Wijst lege arrays bewust af, waardoor wordt voorkomen dat “geen gegevens” per ongeluk als geldige invoer wordt
  geaccepteerd.
- Handig als guard voordat je `Map`-specifieke bewerkingen uitvoert (bijv. `.get()`, `.set()`, iteratie) over een
  collectie.

## Gebruik

### Syntax

Functie:

- `areMaps(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items is gegarandeerd een niet-lege array van Map-instanties tijdens runtime
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false voor: lege arrays, of arrays die een niet-Map-waarde bevatten
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areMaps(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 16:13:47 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>