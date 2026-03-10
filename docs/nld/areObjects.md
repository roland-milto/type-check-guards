# areObjects

## Beschrijving

`areObjects` controleert of een opgegeven gevulde array uitsluitend objecten bevat.

### Use case

Gebruik `areObjects` wanneer je een onbekende array ontvangt (bijv. uit JSON-parsing of externe API's) en moet
garanderen dat deze niet leeg is en dat elk element een object is voordat je erover itereert en objecteigenschappen
benadert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areObjects` om `unknown[]` te valideren voordat je items als objecten behandelt; het retourneert `false` voor
> lege arrays.

### Voordelen

- Retourneert `true` alleen wanneer de invoer een gevulde array is en elk element een object is.
- Stopt vroegtijdig en retourneert `false` zodra een niet-objectelement wordt gevonden.
- Helpt onbekende invoer te valideren voordat object-specifieke bewerkingen worden uitgevoerd.

## Gebruik

### Syntax

Functie:

- `areObjects(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op objectelementen.

### Lokale functie-import

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value is een gevulde array van objecten
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areObjects(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 00:09:44 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>