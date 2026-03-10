# areWeakSets

## Aprašymas

Patikrina, ar įvestis yra netuščias masyvas, kuriame kiekvienas elementas yra `WeakSet`, ir `true` grąžina tik tokiu
atveju.

### Naudojimo atvejis

Patikrinkite vykdymo metu gaunamą įvestį (pvz., iš API, konfigūracijos ar naudotojo pateiktų duomenų), kad prieš tęsdami
logiką, kuri priklauso nuo `WeakSet` elgsenos, įsitikintumėte, jog turite netuščą `WeakSet` egzempliorių sąrašą.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areWeakSets`, kad patikrintumėte nežinomą įvestį prieš laikydami ją `WeakSet[]`. Ji grąžina `false`
> tuštiems masyvams ir ne masyvams.

### Privalumai

- Užtikrina, kad kiekvienas įvesties masyvo elementas yra `WeakSet`.
- Tuštiems masyvams grąžina `false`, taip užkertant kelią atsitiktiniams „visi galioja“ rezultatams, kai trūksta
  duomenų.
- Saugiai nesėkmingai baigia grąžindama `false`, kai įvestis nėra užpildytas masyvas (įskaitant `null`).
- Naudinga kaip apsauga prieš atliekant operacijas, kurioms reikalingi `WeakSet` egzemplioriai.

## Naudojimas

### Sintaksė

Funkcija:

- `areWeakSets(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jame yra `WeakSet` objektų.

### Lokalus funkcijos importas

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a yra netuščias WeakSet egzempliorių masyvas
}

console.log(areWeakSets(a)); // tiesa
console.log(areWeakSets(b)); // netiesa
console.log(areWeakSets(c)); // netiesa
console.log(areWeakSets(null as unknown)); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areWeakSets(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 14:09:33 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>