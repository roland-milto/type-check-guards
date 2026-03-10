# areMaps

## Opis

`areMaps` določa, ali je dano polje neprazno in ali so vsi njegovi elementi primerki `Map`.

### Primer uporabe

Preverite neznan vnos (npr. iz razčlenjevanja JSON, zunanjih API-jev ali dinamičnih virov), preden ga obravnavate kot
neprazen seznam objektov `Map`.

> **Opomba za uporabnike TypeScripta:**
>
> Vrne `false` za prazno polje; `true` vrne samo, ko je polje zapolnjeno in je vsak element `Map`.

### Prednosti

- Zagotavlja, da je vsak element primerek `Map`, in vrne `true` samo, ko preverjanje prestane celotno polje.
- Po zasnovi zavrne prazna polja, s čimer prepreči nenamerno sprejetje »brez podatkov« kot veljavnega vnosa.
- Uporabno kot varovalo pred izvajanjem operacij, specifičnih za `Map` (npr. `.get()`, `.set()`, iteracija) nad zbirko.

## Uporaba

### Skladnja

Funkcija:

- `areMaps(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items je zagotovljeno neprazen niz primerkov Map v času izvajanja
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false za: prazne nize ali nize, ki vsebujejo katero koli vrednost, ki ni Map
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areMaps(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 16:14:31 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>