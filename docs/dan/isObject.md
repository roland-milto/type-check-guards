# isObject

## Beskrivelse

Afgør, om en given `value` er et `object` (eksklusive `null`).

### Anvendelsestilfælde

Brug `isObject` til at validere ukendte input (f.eks. parsed JSON, API-svar, event-payloads), før du tilgår egenskaber,
så du sikrer, at værdien er et objekt og ikke `null`.

> **Bemærkning til TypeScript-brugere:**
>
> `isObject` er en runtime-guard, der returnerer en boolean; den indsnævrer ikke til en specifik objektform. Kombinér
> den med yderligere checks (f.eks. eksistens af egenskaber), når du har brug for stærkere typning.

### Fordele

- Returnerer `true` kun for ikke-`null`-værdier, hvis `typeof` er `"object"`.
- Forhindrer den almindelige JavaScript-faldgrube, hvor `null` ellers ville blive behandlet som et objekt.
- Virker for almindelige objekter og indbyggede objektinstanser (f.eks. `Date`, `RegExp`).
- Simpel, hurtig runtime-kontrol, velegnet til defensiv programmering og inputvalidering.

## Brug

### Syntaks

Funktion:

- `isObject(value)`

Parametre:

- `value`: Værdien, der skal kontrolleres for at være et `object`.

### Lokal import af funktion

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  // input er et ikke-null objekt ved kørselstid
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.isObject(value)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [isObject](../_analysis/isObject.md)

<br>

---

<small>Filen blev oprettet den 31 January 2026 at 00:18:07 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>