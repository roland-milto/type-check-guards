# areJson

## Beschrijving

Controleert of alle elementen van een array JSON-strings zijn, en retourneert `true` alleen als de array gevuld is en
elk item geldige JSON is; anders retourneert het `false`.

### Use case

Valideer binnenkomende data (bijv. uit queryparameters, omgevingsvariabelen of externe API's) waarbij je een array van
JSON-gecodeerde strings verwacht en lege arrays of niet-JSON-items wilt afwijzen.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areJson` wanneer je moet valideren dat een `unknown[]` uitsluitend JSON-strings bevat voordat je ze
> parseert (bijv. met `JSON.parse`).

### Voordelen

- Retourneert `true` alleen wanneer elk element een geldige JSON-string is; anders retourneert het `false`.
- Faalt snel: stopt met controleren zodra een niet-JSON-element wordt gevonden.
- Wijst lege arrays bewust af en retourneert `false` voor niet-gevulde invoer.

## Gebruik

### Syntax

Functie:

- `areJson(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op JSON-stringelementen.

### Lokale functie-import

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // waar
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // onwaar
const empty = areJson([]); // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areJson(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areJson](../_analysis/areJson.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 16:16:53 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>