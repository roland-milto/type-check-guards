# areWeakMaps

## Opis

`areWeakMaps` preveri, ali je vrednost neprazna tabela, kjer je vsak element `WeakMap`, ter vrne `true` samo v tem
primeru, sicer pa `false`.

### Primer uporabe

Preverite podatke med izvajanjem (npr. razčlenjen JSON, vnose vtičnikov ali ohlapno tipizirano konfiguracijo), da
zagotovite, da gre za neprazno tabelo primerkov `WeakMap`, preden iterirate in kličete metode `WeakMap`; vrne `false`,
kadar kateri koli element ni `WeakMap` ali kadar je tabela prazna.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areWeakMaps` za preverjanje neznanega vnosa, preden ga obravnavate kot neprazno `WeakMap[]`; za prazne
> tabele vrne `false`.

### Prednosti

- Zagotavlja, da je vsak element v podani tabeli primerek `WeakMap`.
- Za prazne tabele vrne `false`, s čimer prepreči nenamerno sprejetje »brez podatkov« kot veljavnega vnosa.
- Uporabno kot varovalo pred izvajanjem operacij, specifičnih za `WeakMap`, nad vsemi elementi.

## Uporaba

### Skladnja

Funkcija:

- `areWeakMaps(array)`

Parametri:

- `array`: Tabela, v kateri se preveri prisotnost primerkov `WeakMap`.

### Lokalni uvoz funkcije

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // seznam je neprazno polje primerkov WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ni neprazno WeakMap[]
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areWeakMaps(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 13:39:23 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>