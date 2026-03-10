# arePromises

## Opis

`arePromises` določi, ali so vsi elementi v tabeli primerki `Promise`.

### Primer uporabe

Preverite, da dinamično sestavljen ali od zunaj posredovan seznam vsebuje samo promise, preden jih združite (npr. z
`Promise.all`).

> **Opomba za uporabnike TypeScripta:**
>
> Uporabite `arePromises` za preverjanje `unknown[]` pred klicem `Promise.all` ali drugih operacij, ki delujejo samo s
> promise; za prazne tabele vrne `false`.

### Prednosti

- Zagotovi, da je vsak element `Promise`, preden nadaljujete z logiko, specifično za promise.
- Vrne `false` za nepokrite (prazne) tabele, s čimer prepreči dvoumne rezultate pri praznih vhodih.
- Uporabno kot varovalo med izvajanjem pri delu z `unknown[]` iz zunanjih virov.

## Uporaba

### Skladnja

Funkcija:

- `arePromises(array)`

Parametri:

- `array`: Tabela, ki jo je treba preveriti glede primerkov Promise.

### Lokalni uvoz funkcije

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values je v času izvajanja polje primerkov Promise
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globalni uvoz objekta

Za uvoz funkcij kot globalnih metod objekta uporabite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Nato bo naslednja metoda na voljo globalno:

- `Type.arePromises(array)`

## Analiza funkcij

Tukaj je dokumentirana tabelarična analiza izhoda, ki nastane ob vstavljanju različnih parametrov v
funkcije: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Datoteka je bila ustvarjena 30 January 2026 at 23:49:52 (UTC) z uporabo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** od *
*[Roland Milto](https://roland-milto.de/)**.</small>