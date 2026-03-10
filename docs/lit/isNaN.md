# isNaN

## Aprašymas

Nustato, ar pateikta `value` yra `NaN` tipo `number`, nekonvertuojant eilučių.

### Naudojimo atvejis

Validuoti nepatikimą arba silpnai tipizuotą įvestį (pvz., API duomenų paketus, formų reikšmes, išanalizuotą JSON), kad
būtų aptikta speciali `NaN` reikšmė ir ji būtų apdorota aiškiai, o ne skaitinės įvestys būtų laikomos ne `NaN`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isNaN`, kai reikia aptikti specialią skaitinę reikšmę `NaN`, kartu užtikrinant, kad įvestis iš tiesų yra
`number` (be eilučių konvertavimo į skaičių).

### Privalumai

- Patikrina, ar reikšmė yra `NaN`, neverčiant ne skaičių (pvz., eilučių) į skaičius.
- Grąžina `true` tik toms reikšmėms, kurios yra ir `number` tipo, ir `NaN`.
- Saugus `unknown` įvestims ir padeda išvengti klaidingų teigiamų rezultatų dėl numanomų konversijų.

## Naudojimas

### Sintaksė

Funkcija:

- `isNaN(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra `NaN` tipo `number`.

### Lokalus funkcijos importas

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); // tiesa
console.log(isNaN(b)); // netiesa
console.log(isNaN(c)); // netiesa

if (isNaN(a)) {
  // a yra skaičius ir konkrečiai NaN
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isNaN(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isNaN](../_analysis/isNaN.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 15:46:54 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>