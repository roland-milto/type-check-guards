# arePlainObjects

## Opis

Preveri, ali so vsi elementi polja navadni objekti, in vrne `true` le, če vsak element izpolnjuje pogoje.

### Primer uporabe

Preverite zunanje ali netipizirane podatke (npr. razčlenjen JSON, API payloadi, oddaje obrazcev), da zagotovite, da ste
prejeli neprazno polje, kjer je vsak vnos navaden objekt, preden iterirate in berete lastnosti.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `arePlainObjects` za preverjanje neznanega vnosa, preden ga v TypeScriptu obravnavate kot
`Record<string, unknown>[]` (ali strožjo obliko objekta).

### Prednosti

- Zagotavlja, da je vsak element v vhodnem polju navaden objekt, in vrne `true` samo, ko se vsi elementi ujemajo.
- Zgodaj zavrne neveljavne vnose (ne-polja ali prazna polja) tako, da vrne `false`.
- Kot veljavne navadne objekte obravnava tako objekte, ustvarjene z objektno literalo, kot tudi objekte
  `Object.create(null)`.

## Uporaba

### Skladnja

Funkcija:

- `arePlainObjects(array)`

Parametri:

- `array`: Polje, pri katerem se preverja, ali vsebuje elemente, ki so navadni objekti.

### Lokalni uvoz funkcije

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // res
const b = arePlainObjects([{}, Object.create(null)]); // res
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // napačno
const d = arePlainObjects([] as unknown[]); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.arePlainObjects(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 16:55:45 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>