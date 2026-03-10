# areMaps

## Aprašymas

`areMaps` nustato, ar pateiktas masyvas yra netuščias ir ar visi jo elementai yra `Map` egzemplioriai.

### Naudojimo atvejis

Patikrinkite nežinomą įvestį (pvz., iš JSON analizavimo, išorinių API ar dinaminių šaltinių) prieš laikydami ją netuščiu
`Map` objektų sąrašu.

> **Pastaba TypeScript naudotojams:**
>
> Grąžina `false` tuščiam masyvui; `true` grąžina tik tada, kai masyvas yra užpildytas ir kiekvienas elementas yra
`Map`.

### Privalumai

- Užtikrina, kad kiekvienas elementas yra `Map` egzempliorius, grąžindamas `true` tik tada, kai patikra praeina visas
  masyvas.
- Pagal dizainą atmeta tuščius masyvus, taip užkertant kelią netyčiniam „nėra duomenų“ priėmimui kaip tinkamai įvesčiai.
- Naudinga kaip apsauga prieš atliekant `Map` specifines operacijas (pvz., `.get()`, `.set()`, iteravimą) visoje
  kolekcijoje.

## Naudojimas

### Sintaksė

Funkcija:

- `areMaps(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items vykdymo metu garantuotai yra netuščias Map egzempliorių masyvas
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // false: tuštiems masyvams arba masyvams, kuriuose yra bet kokia ne Map reikšmė
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areMaps(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 16:13:25 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>