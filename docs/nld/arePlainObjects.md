# arePlainObjects

## Beschrijving

Controleert of alle elementen van een array gewone objecten zijn, en retourneert alleen `true` als elk element voldoet.

### Use case

Valideer externe of ongetypeerde data (bijv. geparseerde JSON, API-payloads, formulierinzendingen) om te garanderen dat
je een niet-lege array hebt ontvangen waarin elke entry een gewoon object is, voordat je erover itereert en
eigenschappen uitleest.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `arePlainObjects` om onbekende invoer te valideren voordat je deze in TypeScript behandelt als
`Record<string, unknown>[]` (of een striktere objectvorm).

### Voordelen

- Zorgt ervoor dat elk element in de invoerarray een gewoon object is, en retourneert alleen `true` wanneer alle items
  overeenkomen.
- Wijst ongeldige invoer vroegtijdig af (geen arrays of lege arrays) door `false` te retourneren.
- Behandelt zowel object-literal-objecten als `Object.create(null)`-objecten als geldige gewone objecten.

## Gebruik

### Syntax

Functie:

- `arePlainObjects(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op elementen die gewone objecten zijn.

### Lokale functie-import

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // waar
const b = arePlainObjects([{}, Object.create(null)]); // waar
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // onwaar
const d = arePlainObjects([] as unknown[]); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.arePlainObjects(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 16:55:01 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>