# areOneOfType

## Aprašymas

`areOneOfType` patikrina, ar visi netuščio masyvo elementai yra vieno iš nurodytų vykdymo laiko tipų.

### Naudojimo atvejis

Validuoti gaunamus duomenis (pvz., išanalizuotą JSON), kai laukas turi būti netuščias masyvas, kurio elementai apriboti
žinomu primityvių tipų rinkiniu; grąžinti `false`, kai masyvas tuščias arba jame yra bet koks neleidžiamas tipas.

> **Pastaba TypeScript naudotojams:**
>
> Ši funkcija grąžina boolean reikšmę ir kompiliavimo metu nesusiaurina masyvo elementų tipų; naudokite ją kaip vykdymo
> laiko validavimo žingsnį prieš tolesnį apdorojimą.

### Privalumai

- Užtikrina, kad kiekvienas masyvo elementas atitiktų bent vieną leidžiamą vykdymo laiko tipą, grąžindama `true` tik
  tada, kai praeina visas masyvas.
- Anksti atmeta netinkamas įvestis: grąžina `false`, kai `array` arba `types` yra tuščias arba nėra užpildytas masyvas.
- Naudinga tikrinant mišrių tipų rinkinius (pvz., skaičius ir eilutes) vienu `areOneOfType` iškvietimu.

## Naudojimas

### Sintaksė

Funkcija:

- `areOneOfType(array, types)`

Parametrai:

- `array`: Elementų masyvas, kurį reikia patikrinti pagal pateiktus tipus.
- `types`: Eilučių masyvas, nusakantis duomenų tipus, su kuriais reikia palyginti.

### Lokalus funkcijos importas

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areOneOfType(array, types)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:37:36 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>