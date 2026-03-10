# areOneOfType

## Beskrivelse

`areOneOfType` sjekker om alle elementer i en ikke-tom matrise er av én av de angitte kjøretidstypene.

### Brukstilfelle

Valider innkommende data (f.eks. tolket JSON) der et felt må være en ikke-tom matrise der elementene er begrenset til et
kjent sett med primitive typer; returner `false` når matrisen er tom eller inneholder en type som ikke er tillatt.

> **Merknad for TypeScript-brukere:**
>
> Denne funksjonen returnerer en boolsk verdi og snevrer ikke inn elementtypene i matrisen ved kompileringstid; bruk den
> som et kjøretidsvalideringstrinn før videre behandling.

### Fordeler

- Sikrer at hvert element i en matrise samsvarer med minst én tillatt kjøretidstype, og returnerer `true` bare når hele
  matrisen består testen.
- Avviser ugyldige inndata tidlig: returnerer `false` når `array` eller `types` er tom eller ikke er en utfylt matrise.
- Nyttig for å validere samlinger med blandede typer (f.eks. tall og strenger) med ett enkelt kall til `areOneOfType`.

## Bruk

### Syntaks

Funksjon:

- `areOneOfType(array, types)`

Parametere:

- `array`: En matrise med elementer som skal verifiseres mot de angitte typene.
- `types`: En matrise med strenger som representerer datatypene det skal sjekkes mot.

### Lokal funksjonsimport

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

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areOneOfType(array, types)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 23:38:02 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>