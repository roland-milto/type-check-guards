# areOctals

## Beschrijving

`areOctals` bepaalt of de opgegeven waarde een niet-lege array van geldige octale strings is.

### Use case

Gebruik `areOctals` bij het valideren van gebruikersinvoer, configuratiewaarden of API-payloads die octale literals
moeten bevatten (bijv. bestandspermissiemodi zoals `0o755`) en je lege arrays of ongeldige entries wilt afwijzen door
`false` terug te geven.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areOctals` om te garanderen dat je een niet-lege `unknown[]` hebt waarbij elke entry een geldige octale
> string is vóór het converteren (bijv. via `Number(...)` of custom parsing).

### Voordelen

- Valideert dat een waarde een niet-lege array is waarbij elk element een octale string is, en geeft alleen `true` terug
  wanneer alle items slagen.
- Faalt snel: geeft `false` terug zodra een niet-octaal element wordt gevonden.
- Handig als guard vóór het parsen of converteren van octale strings om runtimefouten en inconsistente invoerafhandeling
  te voorkomen.

## Gebruik

### Syntax

Functie:

- `areOctals(array)`

Parameters:

- `array`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // waarde is een niet-lege array van octale tekenreeksen
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areOctals(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:57:30 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>