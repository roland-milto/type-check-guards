# areValidDates

## Descripció

Determina si una matriu no és buida i consisteix íntegrament en objectes `Date` vàlids.

### Cas d’ús

Fes servir `areValidDates` per validar matrius proporcionades per l'usuari o per una API abans de fer operacions basades
en dates (ordenació, comprovacions de rang, format), assegurant que totes les entrades són objectes `Date` reals i
vàlids i que la llista no és buida.

> **Nota per als usuaris de TypeScript:**
>
> `areValidDates` retorna `false` per a una matriu buida; assegura't que la matriu està pensada per no ser buida abans
> de basar-t'hi com a pas de validació.

### Avantatges

- Retorna `true` només quan cada element és una instància vàlida de `Date` (sense dates no vàlides com
  `new Date('invalid')`).
- Rebutja una entrada buida retornant `false`, assegurant que només acceptes llistes de dates significatives i no
  buides.
- Proporciona una comprovació booleana senzilla d'estil guarda que és fàcil de compondre amb altres validacions.

## Ús

### Sintaxi

Funció:

- `areValidDates(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar, que pot contenir objectes `Date`.

### Importació local de funció

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // cert
console.log(areValidDates(b)); // fals
console.log(areValidDates(c)); // fals
console.log(areValidDates(d)); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areValidDates(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:30:58 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>