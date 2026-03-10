# isBoolean

## Opis

Določi, ali je dana vrednost tipa `boolean`.

### Primer uporabe

Validirajte zunanje ali netipizirane podatke (npr. okoljske spremenljivke, JSON payloadi, parametri poizvedb), da
zagotovite, da je vrednost tipa `boolean`, preden jo uporabite v pogojni logiki.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isBoolean`, da zožite tip `unknown` na `boolean` pred uporabo boolean operacij.

### Prednosti

- Preprosto in hitro preverjanje med izvajanjem z uporabo `typeof`.
- Pomaga validirati neznan vnos pred logiko, specifično za boolean.
- Vrne predvidljiv rezultat tipa `boolean` (`true`/`false`).

## Uporaba

### Skladnja

Funkcija:

- `isBoolean(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input je tukaj logična vrednost
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isBoolean(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 14:37:48 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>