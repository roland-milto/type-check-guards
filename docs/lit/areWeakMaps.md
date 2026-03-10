# areWeakMaps

## Aprašymas

`areWeakMaps` patikrina, ar reikšmė yra netuščias masyvas, kuriame kiekvienas elementas yra `WeakMap`, ir grąžina `true`
tik tokiu atveju, o kitu atveju – `false`.

### Naudojimo atvejis

Patikrinkite vykdymo laiko duomenis (pvz., išanalizuotą JSON, įskiepių įvestis ar silpnai tipizuotą konfigūraciją), kad
įsitikintumėte, jog tai netuščias `WeakMap` egzempliorių masyvas prieš iteruojant ir kviečiant `WeakMap` metodus;
grąžina `false`, kai bent vienas elementas nėra `WeakMap` arba kai masyvas tuščias.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areWeakMaps`, kad patikrintumėte nežinomą įvestį prieš laikydami ją netuščiu `WeakMap[]`; tuštiems masyvams
> ji grąžina `false`.

### Privalumai

- Užtikrina, kad kiekvienas pateikto masyvo elementas yra `WeakMap` egzempliorius.
- Tuštiems masyvams grąžina `false`, taip užkertant kelią atsitiktiniam „nėra duomenų“ priėmimui kaip tinkamai įvesčiai.
- Naudinga kaip apsauga prieš atliekant `WeakMap` specifines operacijas su visais elementais.

## Naudojimas

### Sintaksė

Funkcija:

- `areWeakMaps(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `WeakMap` egzempliorių.

### Lokalus funkcijos importas

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // sąrašas yra netuščias WeakMap egzempliorių masyvas
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // ne netuščias WeakMap[]
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areWeakMaps(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:38:09 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>