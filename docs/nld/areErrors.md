# areErrors

## Beschrijving

Controleert of een array niet leeg is en uitsluitend `Error`-objecten bevat, en geeft `true` of `false` terug.

### Use case

Valideer dat een runtime-aangeleverde `unknown[]` (bijv. geaggregeerde mislukkingen, validatieresultaten of
gedeserialiseerde data) een niet-lege lijst van `Error`-objecten is voordat je erover iterereert, logt of opnieuw gooit.

> **Hint voor TypeScript-gebruikers:**
>
> `areErrors` geeft alleen `true` terug voor een gevulde array waarbij elk item een `Error` is; het geeft `false` terug
> voor een lege array of als een element geen `Error` is.

### Voordelen

- Zorgt ervoor dat elk element een `Error`-instantie is, waardoor veilige foutafhandeling en logging mogelijk zijn.
- Wijst lege arrays af, waardoor wordt voorkomen dat onbedoelde “geen fouten”-toestanden als geldige foutlijsten worden
  behandeld.
- Werkt goed als runtime-guard bij het omgaan met `unknown[]`-invoer (bijv. van API’s of `catch`-blokken).

## Gebruik

### Syntax

Functie:

- `areErrors(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `Error`-objecten.

### Lokale functie-import

```ts
import { areErrors } from "@type-check/guards";

const value: unknown = [new Error("error1"), new TypeError("error2")];

if (Array.isArray(value) && areErrors(value)) {
  // value is een niet-lege array van Error-objecten
  for (const err of value) {
    console.error(err.name, err.message);
  }
} else {
  console.log("Not a non-empty Error[]");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areErrors(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areErrors](../_analysis/areErrors.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 12:34:46 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>