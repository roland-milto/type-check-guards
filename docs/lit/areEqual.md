# areEqual

## Aprašymas

`areEqual` patikrina, ar visi masyvo elementai yra lygūs nurodytai tikėtinai reikšmei, ir grąžina `true` tik ne tuštiems
masyvams, kuriuose kiekvienas elementas sutampa.

### Naudojimo atvejis

Patvirtinti, kad sąraše yra tik viena leidžiama reikšmė (pvz., visos būsenos vėliavėlės yra `true`, visi vaidmenys yra
`"admin"`, arba visi skaitiniai įrašai lygūs reikalaujamai konstantai), laikant tuščią įvestį negaliojančia (`false`).

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areEqual`, kai reikia griežto visų elementų patikrinimo; ji grąžina `false` tuštiems masyvams ir bet kokiai
> įvesčiai, kuri nėra masyvas arba nėra užpildyta.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas atitinka tikėtiną reikšmę; kitu atveju grąžina `false`.
- Greitai nutraukia: nustoja tikrinti, kai tik randamas neatitinkantis elementas.
- Apsaugo nuo neteisingos įvesties, grąžindama `false`, kai įvestis nėra užpildytas masyvas.

## Naudojimas

### Sintaksė

Funkcija:

- `areEqual(value, expected)`

Parametrai:

- `value`: Masyvas, kurį reikia patikrinti.
- `expected`: Elementas, su kuriuo lyginamas kiekvienas masyvo elementas.

### Lokalus funkcijos importas

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areEqual(value, expected)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:51:14 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>