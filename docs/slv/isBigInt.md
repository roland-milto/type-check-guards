# isBigInt

## Opis

`isBigInt` preveri, ali je dana vrednost tipa `bigint`, ter vrne `true` za primitivne vrednosti BigInt in sicer `false`.

### Primer uporabe

Preverite in zožite vrednosti, ki prihajajo iz netipiziranih virov (npr. razčlenjevanje JSON, uporabniški vnos, zunanji
API-ji), preden izvedete izračune, specifične za BigInt, ali jih shranite v polja, ki sprejemajo samo BigInt.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isBigInt`, da zožite `unknown` na `bigint` pred izvajanjem aritmetike BigInt (npr. `+`, `*`), ki zahteva
> operande tipa BigInt.

### Prednosti

- Zagotavlja preprost in zanesljiv preveritveni mehanizem v času izvajanja za primitivni tip `bigint`.
- Pomaga zožiti vrednosti tipa `unknown` pred izvajanjem operacij, ki so dovoljene samo za BigInt.
- Izogne se lažnim pozitivnim rezultatom: običajna števila, nizi in drugi tipi vrnejo `false`.

## Uporaba

### Skladnja

Funkcija:

- `isBigInt(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti.

### Lokalni uvoz funkcije

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // res
console.log(isBigInt(10));  // napačno
console.log(isBigInt("10")); // napačno
```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isBigInt(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 23:33:15 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>