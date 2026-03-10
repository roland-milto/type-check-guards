# areBinaries

## Opis

Preveri, ali je podana vrednost neprazen seznam veljavnih binarnih nizov, in vrne `true` samo, če vsi elementi
prestanejo validacijo.

### Primer uporabe

Uporabite `areBinaries`, ko prejmete neznan seznam (npr. iz JSON-a, obrazcev ali API-jev) in morate zagotoviti, da gre
za neprazen seznam binarnih nizov, preden ga razčlenite ali obdelate.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `areBinaries` za validacijo neznanega vnosa, preden binarne nize pretvorite v števila/BigInt-e; zagotovi, da
> seznam ni prazen in da je vsak element veljaven binarni niz.

### Prednosti

- Preveri, da je vrednost neprazen seznam, kjer je vsak element veljaven binarni niz.
- Vrne preprost logični rezultat (`true`/`false`), primeren za varovalke, zgodnje vrnitve in validacijo vnosa.
- Prepreči nadaljnje napake pri razčlenjevanju, saj zavrne sezname, ki vsebujejo kakršen koli nebinarni vnos.

## Uporaba

### Skladnja

Funkcija:

- `areBinaries(array)`

Parametri:

- `array`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // res
console.log(areBinaries(b)); // napačno
console.log(areBinaries([])); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.areBinaries(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:15:52 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>