# arePromises

## Aprašymas

`arePromises` nustato, ar visi masyvo elementai yra `Promise` egzemplioriai.

### Naudojimo atvejis

Patikrinkite, ar dinamiškai sudarytame arba išoriškai pateiktame sąraše yra tik pažadai, prieš juos agreguodami (pvz.,
su `Promise.all`).

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `arePromises`, kad patikrintumėte `unknown[]` prieš kviesdami `Promise.all` ar kitas tik pažadams skirtas
> operacijas; tuštiems masyvams ji grąžina `false`.

### Privalumai

- Užtikrina, kad kiekvienas elementas yra `Promise` prieš tęsiant su pažadams būdinga logika.
- Grąžina `false` neužpildytiems masyvams, taip išvengiant dviprasmiškų rezultatų tuštiems įvesties duomenims.
- Naudinga kaip vykdymo laiko apsauga dirbant su `unknown[]` iš išorinių šaltinių.

## Naudojimas

### Sintaksė

Funkcija:

- `arePromises(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `Promise` egzempliorių.

### Lokalus funkcijos importas

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values yra Promise egzempliorių masyvas vykdymo metu
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.arePromises(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 23:48:58 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>