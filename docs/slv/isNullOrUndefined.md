# isNullOrUndefined

## Opis

Preveri, ali je dana vrednost `null` ali `undefined`.

### Primer uporabe

Uporabite `isNullOrUndefined`, ko morate tako `null` kot `undefined` obravnavati kot »brez vrednosti«, na primer pri
validaciji neobveznih vnosov, normalizaciji API payloadov ali varovanju poti kode pred dereferenciranjem potencialno
manjkajoče vrednosti.

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `isNullOrUndefined` kot varovalo pred manjkajočimi vrednostmi, preden dostopate do lastnosti ali kličete
> metode; vrne `true` samo za `null` in `undefined`.

### Prednosti

- Zagotavlja jasno, ponovno uporabno varovalo za zaznavanje `null` in `undefined` na enem mestu.
- Vrne preprost boolean (`true`/`false`), ki ga je enostavno sestavljati v pogojih in validacijah.
- Pomaga preprečiti pogoste napake med izvajanjem, saj preveri manjkajoče vrednosti, preden dostopate do lastnosti ali
  kličete metode.

## Uporaba

### Skladnja

Funkcija:

- `isNullOrUndefined(value)`

Parametri:

- `value`: Vrednost, ki jo je treba preveriti glede `null` ali `undefined`.

### Lokalni uvoz funkcije

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // obravnavaj manjkajočo vrednost
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.isNullOrUndefined(value)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Datoteka je bila ustvarjena 31 January 2026 at 00:35:13 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>