# isDecimal

## Beschrijving

`isDecimal` controleert of een waarde een decimale stringrepresentatie is zonder leidende/afsluitende witruimte en met
een geldige decimale indeling.

### Use case

Valideer formuliervelden, API-payloads of configuratiewaarden die als een decimale string (optioneel met teken) moeten
worden aangeleverd zonder enige omringende witruimte, voordat je ze parseert of opslaat.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isDecimal` om gebruikersinvoer te valideren voordat je deze converteert (bijv. met `Number(value)`), vooral
> wanneer witruimte moet worden afgewezen.

### Voordelen

- Valideert strikt dat de invoer een string is en overeenkomt met een decimaal-literal patroon.
- Wijst leidende en afsluitende witruimte (inclusief controletekens) af om dubbelzinnige parsing te voorkomen.
- Snelle voorafcontroles (typecontrole en eerste/laatste teken) voordat de regex wordt uitgevoerd.
- Retourneert een eenvoudig booleaans resultaat (`true`/`false`) dat geschikt is voor guards en invoervalidatie.

## Gebruik

### Syntax

Functie:

- `isDecimal(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden op een decimale stringindeling.

### Lokale functie-import

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v is hier een string (tijdens runtime gevalideerd)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isDecimal(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 15:53:43 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>