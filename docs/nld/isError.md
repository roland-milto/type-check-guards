# isError

## Beschrijving

Controleert of een gegeven `value` een instantie van `Error` is.

### Use case

Gebruik `isError` wanneer je een `unknown`-waarde ontvangt (zoals uit een `catch`-blok, een callback of een externe
bibliotheek) en je veilig wilt bepalen of het een `Error` is voordat je `message`, `name` of `stack` uitleest.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isError` om `unknown`-waarden (bijv. uit `catch`) te bewaken voordat je ze als een `Error` behandelt.

### Voordelen

- Biedt een eenvoudige runtime-controle om te bepalen of een waarde een `Error`-instantie is.
- Helpt onbekende invoer te verfijnen voordat je `Error`-eigenschappen zoals `message` of `stack` benadert.
- Vermindert het risico op runtime-excepties bij het afhandelen van waarden uit `catch`, externe API's of ongetypeerde
  bronnen.

## Gebruik

### Syntax

Functie:

- `isError(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden tegen het `Error`-type.

### Lokale functie-import

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isError(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isError](../_analysis/isError.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 12:46:28 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>