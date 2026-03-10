# isError

## Opis

Provjerava je li zadana `value` instanca `Error`.

### Slučaj uporabe

Koristite `isError` kada primite vrijednost tipa `unknown` (npr. iz `catch` bloka, povratnog poziva ili vanjske
biblioteke) i trebate sigurno utvrditi je li to `Error` prije čitanja `message`, `name` ili `stack`.

> **Napomena za TypeScript korisnike:**
>
> Koristite `isError` za zaštitu (guard) vrijednosti tipa `unknown` (npr. iz `catch`) prije nego što ih tretirate kao
`Error`.

### Prednosti

- Pruža jednostavnu provjeru u izvođenju (runtime) je li vrijednost instanca `Error`.
- Pomaže suziti nepoznate ulaze prije pristupanja svojstvima `Error` kao što su `message` ili `stack`.
- Smanjuje rizik od iznimki u izvođenju pri rukovanju vrijednostima iz `catch`, vanjskih API-ja ili netipiziranih
  izvora.

## Uporaba

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

Za uvoz funkcija kao globalnih metoda objekta upotrijebite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Sljedeća metoda bit će tada dostupna globalno:

- `Type.isError(value)`

## Analiza funkcija

Ovdje je dokumentirana tablična analiza izlaza koji nastaje pri unosu različitih parametara u
funkcije: [isError](../_analysis/isError.md)

<br>

---

<small>Datoteka je generirana 6 February 2026 at 12:45:38 (UTC) uz korištenje *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>