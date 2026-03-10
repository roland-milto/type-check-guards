# areBuffers

## Aprašymas

`areBuffers` patikrina, ar pateikta reikšmė yra ne tuščias, užpildytas masyvas, kuriame kiekvienas elementas yra
`Buffer`, ir tokiu atveju grąžina `true`, o kitu atveju – `false`.

### Naudojimo atvejis

Patikrinkite gaunamus dalių masyvus (pvz., iš srautų, failų įkėlimų ar tinklo paketų), kad įsitikintumėte, jog visos
dalys yra `Buffer` egzemplioriai, prieš juos sujungiant, dekoduojant arba perduodant kriptografinėms ar dvejetainio
apdorojimo funkcijoms.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areBuffers`, kad patikrintumėte `unknown[]` prieš kviesdami su `Buffer` susijusias API, tokias kaip
`Buffer.concat`, užtikrindami, kad funkcija grąžina `true` tik tada, kai kiekvienas elementas yra `Buffer`.

### Privalumai

- Užtikrina, kad kiekvienas įvesties elementas yra Node.js `Buffer` egzempliorius, grąžindamas `true` tik tada, kai
  atitinka visas masyvas.
- Anksti atmeta neteisingas įvestis, reikalaudamas ne tuščio, užpildyto masyvo; grąžina `false` tuštiems masyvams arba
  ne masyvams.
- Naudinga kaip apsauga prieš atliekant tik su buferiais susijusias operacijas (pvz., sujungimą, maišos skaičiavimą,
  dvejetainius protokolus).

## Naudojimas

### Sintaksė

Funkcija:

- `areBuffers(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jame yra buferių egzempliorių.

### Lokalus funkcijos importas

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areBuffers(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 16:26:08 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>