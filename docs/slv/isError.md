# isError

## Opis

Preveri, ali je podana `value` primerek `Error`.

### Primer uporabe

Uporabite `isError`, ko prejmete vrednost tipa `unknown` (na primer iz bloka `catch`, povratnega klica ali zunanje
knjižnice) in morate varno ugotoviti, ali gre za `Error`, preden preberete `message`, `name` ali `stack`.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isError` za varovanje vrednosti tipa `unknown` (npr. iz `catch`), preden jih obravnavate kot `Error`.

### Prednosti

- Omogoča preprosto preverjanje med izvajanjem, ali je vrednost primerek `Error`.
- Pomaga zožiti neznane vnose, preden dostopate do lastnosti `Error`, kot sta `message` ali `stack`.
- Zmanjšuje tveganje izjem med izvajanjem pri obravnavi vrednosti iz `catch`, zunanjih API-jev ali netipiziranih virov.

## Uporaba

### Skladnja

Funkcija:

- `isError(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti glede na tip `Error`.

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

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isError(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isError](../_analysis/isError.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 12:47:02 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>