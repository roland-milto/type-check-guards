# isError

## Opis

Provjerava da li je dati `value` instanca `Error`.

### Slučaj upotrebe

Koristite `isError` kada primite `unknown` vrijednost (npr. iz `catch` bloka, callback-a ili eksterne biblioteke) i
trebate sigurno utvrditi da li je to `Error` prije čitanja `message`, `name` ili `stack`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isError` da zaštitite `unknown` vrijednosti (npr. iz `catch`) prije nego što ih tretirate kao `Error`.

### Prednosti

- Pruža jednostavnu provjeru u runtime-u da li je vrijednost instanca `Error`.
- Pomaže suziti nepoznate ulaze prije pristupanja `Error` svojstvima kao što su `message` ili `stack`.
- Smanjuje rizik od runtime izuzetaka pri rukovanju vrijednostima iz `catch`, eksternih API-ja ili netipiziranih izvora.

## Upotreba

### Sintaksa

Funkcija:

- `isError(value)`

Parametri:

- `value`: Vrijednost koju treba provjeriti u odnosu na tip `Error`.

### Lokalni uvoz funkcije

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

### Globalni uvoz objekta

Za uvoz funkcija kao globalnih metoda objekta koristite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda će tada biti dostupna globalno:

- `Type.isError(value)`

## Analiza funkcija

Ovdje je dokumentovana tabelarna analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isError](../_analysis/isError.md)

<br>

---

<small>Datoteka je generisana 6 February 2026 at 12:44:50 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>