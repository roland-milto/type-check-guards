# isArray

## Opis

`isArray` preveri, ali je podana vrednost polje, in vrne `true`, če je, sicer `false`.

### Primer uporabe

Validirajte neznane podatke (npr. razčlenjen JSON ali odzive API), da zagotovite, da je vrednost polje, preden
iterirate, indeksirate ali dostopate do `.length`.

> **Opomba za uporabnike TypeScripta:**
>
> `isArray` uporabite, ko potrebujete preverjanje polj med izvajanjem; vrne logično vrednost in ga je varno klicati z
> vrednostmi tipa `unknown`.

### Prednosti

- Uporablja vgrajeni `Array.isArray` za zanesljivo zaznavanje polj med različnimi konteksti (npr. iframes).
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovala in razvejano logiko.
- Deluje z vsakim tipom vnosa, ker je parameter tipa `unknown`.

## Uporaba

### Skladnja

Funkcija:

- `isArray(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input je v času izvajanja polje
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isArray(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isArray](../_analysis/isArray.md)

<br>

---

<small>Datoteka je bila ustvarjena 6 February 2026 at 11:31:59 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>