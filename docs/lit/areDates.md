# areDates

## Aprašymas

`areDates` nustato, ar pateiktas masyvas yra užpildytas ir ar jame yra tik `Date` objektai, grąžindamas `true` tik tada,
kai visi elementai yra galiojančios datos.

### Naudojimo atvejis

Naudokite `areDates`, kad patikrintumėte nežinomą įvestį (pvz., išanalizuotą JSON, formų duomenis, API užklausų
duomenis) prieš vykdydami su datomis susijusią logiką, pvz., rikiavimą pagal laiką, formatavimą ar intervalų
skaičiavimą.

> **Pastaba TypeScript naudotojams:**
>
> `true` grąžinama tik netuštiems masyvams, kuriuose kiekvienas elementas yra `Date`; tušti masyvai grąžina `false`.

### Privalumai

- Užtikrina, kad masyvas nebūtų tuščias prieš tikrinant jo turinį, taip neleidžiant gauti `true` tuštiems įvesties
  duomenims.
- Patikrina, ar kiekvienas elementas yra `Date` egzempliorius, ir iškart grąžina `false` ties pirmu neatitikimu.
- Naudinga kaip apsauginio tipo patikra prieš atliekant su datomis susijusias operacijas su masyvo elementais.

## Naudojimas

### Sintaksė

Funkcija:

- `areDates(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `Date` objektų.

### Lokalus funkcijos importas

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // true
console.log(areDates(b)); // false
console.log(areDates(c)); // false

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areDates(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areDates](../_analysis/areDates.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 15:31:09 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>