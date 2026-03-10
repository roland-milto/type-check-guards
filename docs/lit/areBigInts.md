# areBigInts

## Aprašymas

`areBigInts` nustato, ar reikšmė yra netuščias masyvas, kuriame yra tik `bigint` reikšmės.

### Naudojimo atvejis

Patikrinkite nežinomą įvestį (pvz., išanalizuotus į JSON panašius duomenis, API užklausų duomenis arba funkcijos
parametrus, kurių tipas `unknown`), kad prieš apdorojimą įsitikintumėte, jog tai netuščias `bigint` reikšmių masyvas;
grąžina `true` tik tada, kai visi elementai yra `bigint`, kitu atveju `false`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areBigInts` kaip vykdymo laiko apsaugą prieš atliekant tik `bigint` operacijas (pvz., aritmetiką,
> palyginimus) su nežinoma įvestimi.

### Privalumai

- Užtikrina, kad kiekvienas elementas yra `bigint`, grąžindama `true` tik tada, kai atitinka visas masyvas.
- Pagal dizainą atmeta ne masyvus ir tuščius masyvus (per `isFilledArray`), taip užkertant kelią netyčiniam neteisingų
  įvesčių priėmimui.
- Greitas nutraukimas: grąžina `false` iškart, kai randamas ne `bigint` elementas.

## Naudojimas

### Sintaksė

Funkcija:

- `areBigInts(array)`

Parametrai:

- `array`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // tiesa
console.log(areBigInts(b)); // netiesa
console.log(areBigInts(c)); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areBigInts(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:26:33 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>