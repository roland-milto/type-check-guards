# areOneOfType

## Skildring

`areOneOfType` sjekkar om alle element i ein ikkje-tom array er av ein av dei spesifiserte runtime-typane.

### Brukstilfelle

Valider innkomande data (t.d. tolka JSON) der eit felt må vere ein ikkje-tom array der elementa er avgrensa til eit
kjent sett av primitive typar; returner `false` når arrayen er tom eller inneheld ein ikkje-tillaten type.

> **Merknad for TypeScript-brukarar:**
>
> Denne funksjonen returnerer ein boolean og snevrar ikkje inn elementtypane i arrayen ved kompilering; bruk han som eit
> runtime-valideringssteg før vidare behandling.

### Fordelar

- Sikrar at kvart element i ein array samsvarar med minst éin tillaten runtime-type, og returnerer `true` berre når
  heile arrayen består testen.
- Avviser ugyldige input tidleg: returnerer `false` når `array` eller `types` er tomt eller ikkje er ein utfylt array.
- Nyttig for å validere samlingar med blanda typar (t.d. tal og strengar) med eitt enkelt kall til `areOneOfType`.

## Bruk

### Syntaks

Funksjon:

- `areOneOfType(array, types)`

Parameter:

- `array`: Ein array med element som skal verifiserast mot dei oppgjevne typane.
- `types`: Ein array av strengar som representerer datatypane det skal sjekkast mot.

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

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areOneOfType(array, types)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:37:58 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>