# isPlainObject

## Beschrijving

Controleert of een gegeven `value` een plain object is en geeft `true` terug als dat zo is, anders `false`.

### Use case

Valideer dat een `unknown`-invoer (bijv. geparseerde JSON, externe data of functieargumenten) een plain object is
voordat je sleutels uitleest of het omzet naar een getypeerd configuratieobject.

> **Hint voor TypeScript-gebruikers:**
>
> `isPlainObject` is nuttig om `unknown` te verfijnen voordat je het als een record-achtig object behandelt; het geeft
> alleen `true` terug voor waarden waarvan de interne tag `[object Object]` is.

### Voordelen

- Biedt een eenvoudige, betrouwbare controle om te bepalen of een waarde een plain object is (d.w.z. `Object` / `{}`),
  en geeft `true` of `false` terug.
- Helpt plain objects te onderscheiden van arrays, functies, `null` en andere niet-plain-objecttypen.
- Handig als type guard in TypeScript om `unknown`-waarden te verfijnen voordat je objecteigenschappen benadert.

## Gebruik

### Syntax

Functie:

- `isPlainObject(value)`

Parameters:

- `value`: De waarde die getest moet worden op plain-objectstatus.

### Lokale functie-import

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input is hier een gewoon object
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // waar
console.log(isPlainObject([])); // onwaar
console.log(isPlainObject(null)); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isPlainObject(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 12:18:52 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>