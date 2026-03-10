# areBuffers

## Opis

`areBuffers` preveri, ali je podana vrednost neprazno, zapolnjeno polje, kjer je vsak element `Buffer`, ter vrne `true`,
če je tako, sicer pa `false`.

### Primer uporabe

Preverite dohodna polja kosov (npr. iz tokov, nalaganj datotek ali omrežnih paketov), da zagotovite, da so vsi deli
instance `Buffer`, preden jih združite, dekodirate ali posredujete kriptografskim ali binarno-obdelovalnim funkcijam.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areBuffers` za preverjanje `unknown[]` pred klicanjem API-jev, specifičnih za Buffer, kot je
`Buffer.concat`, s čimer zagotovite, da funkcija vrne `true` samo, ko je vsak element `Buffer`.

### Prednosti

- Zagotavlja, da je vsak element v vhodu instanca Node.js `Buffer`, in vrne `true` samo, ko se ujema celotno polje.
- Zgodaj zavrne neveljavne vnose, saj zahteva neprazno, zapolnjeno polje; vrne `false` za prazna polja ali vrednosti, ki
  niso polja.
- Uporabno kot varovalo pred izvajanjem operacij, ki delujejo samo z medpomnilniki (npr. združevanje, zgoščevanje,
  binarni protokoli).

## Uporaba

### Skladnja

Funkcija:

- `areBuffers(array)`

Parametri:

- `array`: Polje, ki ga je treba preveriti glede instanc `Buffer`.

### Lokalni uvoz funkcije

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areBuffers(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 16:27:10 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>