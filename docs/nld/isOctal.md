# isOctal

## Beschrijving

Bepaalt of een waarde een geldige octale literal-string is (bijv. `0o755`).

### Use case

Valideer gebruikersinvoer of configuratiewaarden die als een octale literal-string moeten worden uitgedrukt (
bijvoorbeeld bestandsrechten zoals `0o644`) voordat je ze parseert of converteert.

> **Hint voor TypeScript-gebruikers:**
>
> `isOctal` is een type guard (`value is string`). Na een `true`-resultaat vernauwt TypeScript de gecontroleerde
> variabele tot `string`.

### Voordelen

- Biedt een strikte type guard: retourneert `true` alleen wanneer de invoer een string is die overeenkomt met een octale
  literal-indeling.
- Wijst lege strings en strings met leidende/afsluitende witruimte (ASCII-control/spatie) af, waardoor onbedoelde
  matches worden verminderd.
- Ondersteunt een optioneel teken en is niet hoofdlettergevoelig voor het `0o`/`0O`-voorvoegsel.
- Is tolerant voor niet-string invoer door `false` te retourneren in plaats van een fout te gooien.

## Gebruik

### Syntax

Functie:

- `isOctal(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // waar
console.log(isOctal(b)); // waar
console.log(isOctal(c)); // onwaar
console.log(isOctal(d)); // onwaar

if (isOctal(a)) {
  // a is hier een string
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isOctal(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 15:42:27 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>