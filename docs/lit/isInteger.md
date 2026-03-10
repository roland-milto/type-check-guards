# isInteger

## Aprašymas

Nustato, ar pateikta `value` yra saugus sveikasis skaičius.

### Naudojimo atvejis

Patikrinkite nepatikimą įvestį (pvz., užklausos parametrus, JSON duomenų paketus, aplinkos kintamuosius) prieš naudodami
ją kaip sveikąjį skaičių masyvo indeksams, puslapiavimui, skaitikliams ar duomenų bazės ID.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isInteger`, kad patikrintumėte nežinomą įvestį prieš laikydami ją skaitiniu sveikuoju skaičiumi; ji grąžina
`true` tik toms reikšmėms, kurioms `typeof value === "number"` ir `Number.isSafeInteger(value)`.

### Privalumai

- Tikrina ir tipų, ir skaitinį saugumą: grąžina `true` tik tada, kai įvestis yra skaičius ir saugus sveikasis skaičius.
- Apsaugo nuo dažnų klaidų, susijusių su skaitine konversija: tokios eilutės kaip "5" teisingai grąžina `false`.
- Atmeta ne sveikuosius ir nesaugius sveikuosius skaičius, todėl tinka ID, skaitikliams ir masyvų indeksavimui.

## Naudojimas

### Sintaksė

Funkcija:

- `isInteger(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti dėl sveikojo skaičiaus būsenos.

### Lokalus funkcijos importas

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // tiesa
const b = isInteger(-100);   // tiesa
const c = isInteger("5");    // netiesa
const d = isInteger(5.5);    // netiesa
const e = isInteger(null);   // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isInteger(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:50:31 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>