# areDates

## Descripció

`areDates` determina si una matriu donada està emplenada i conté només objectes `Date`, retornant `true` només quan tots
els elements són dates vàlides.

### Cas d’ús

Fes servir `areDates` per validar entrades desconegudes (p. ex., JSON analitzat, dades de formulari, càrregues útils
d'API) abans d'executar lògica específica de dates com ordenar per temps, donar format o calcular intervals.

> **Nota per als usuaris de TypeScript:**
>
> Retorna `true` només per a matrius no buides on cada element és un `Date`; les matrius buides retornen `false`.

### Avantatges

- Assegura que una matriu no sigui buida abans de validar-ne el contingut, evitant retornar `true` per a entrades
  buides.
- Verifica que cada element sigui una instància de `Date`, retornant `false` immediatament a la primera discrepància.
- Útil com a comprovació de tipus guarda abans de fer operacions específiques de dates sobre els elements de la matriu.

## Ús

### Sintaxi

Funció:

- `areDates(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per veure si conté objectes `Date`.

### Importació local de funció

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // cert
console.log(areDates(b)); // fals
console.log(areDates(c)); // fals

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areDates(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areDates](../_analysis/areDates.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 15:29:40 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>