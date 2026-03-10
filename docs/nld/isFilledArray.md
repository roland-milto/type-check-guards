# isFilledArray

## Beschrijving

Controleert of `value` een array is met minstens één element, en retourneert `true` of `false`.

### Use case

Gebruik `isFilledArray` om binnenkomende gegevens (bijv. API-payloads, formulierwaarden, configuratie) te valideren
voordat je erover itereert, het eerste element benadert of logica toepast die minstens één item vereist.

> **Hint voor TypeScript-gebruikers:**
>
> `isFilledArray` is een runtime-guard die een boolean retourneert; het versmalt elementtypen niet verder dan het
> bevestigen dat de array niet leeg is.

### Voordelen

- Eenvoudige, snelle controle op een niet-lege array met `Array.isArray` en een lengtecontrole.
- Helpt runtimefouten te voorkomen wanneer code ervan uitgaat dat een array minstens één element heeft.
- Duidelijk booleaans resultaat: retourneert `true` voor niet-lege arrays en `false` anders.

## Gebruik

### Syntax

Functie:

- `isFilledArray(value)`

Parameters:

- `value`: De waarde om te controleren of het een niet-lege array is.

### Lokale functie-import

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // input is tijdens runtime een niet-lege array
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isFilledArray(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 11:48:07 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>