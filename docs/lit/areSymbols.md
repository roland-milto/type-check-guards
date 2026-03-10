# areSymbols

## Aprašymas

Patikrina, ar įvestis yra užpildytas masyvas, kurio elementai visi yra simboliai, ir grąžina `true` arba `false`.

### Naudojimo atvejis

Patikrinkite, ar konfigūracijos laukas (pvz., unikalių raktų sąrašas, pateiktas kaip simboliai) yra netuščias masyvas,
kuriame yra tik simboliai, prieš naudodami jį API, kurioms reikia `symbol[]`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areSymbols`, kad patikrintumėte nežinomą įvestį prieš laikydami ją `symbol[]`; ji grąžina `false` ne
> masyvams ir tuštiems masyvams.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra netuščias masyvas ir kiekvienas elementas yra simbolis.
- Apsaugo nuo klaidingų teigiamų rezultatų, atmesdamas ne masyvus ir tuščius masyvus per vidinį užpildyto masyvo
  patikrinimą.
- Naudinga kaip vykdymo laiko tipo sargyba, skirta patikrinti tik simbolių sąrašus prieš tolesnį apdorojimą.

## Naudojimas

### Sintaksė

Funkcija:

- `areSymbols(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jo elementai yra simboliai.

### Lokalus funkcijos importas

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a vykdymo metu yra tik simbolių masyvas
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areSymbols(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:22:34 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>