# areUndefined

## Descripció

`areUndefined` comprova si cada element d'un array proporcionat és `undefined`.

### Cas d’ús

Valida que una llista de resultats opcionals no conté cap valor real (només `undefined`), p. ex., després de mapar
cerques on les entrades absents es representen com a `undefined`, i vols confirmar que totes les cerques han fallat.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areUndefined` quan necessitis afirmar que un `unknown[]` conté només valors `undefined`; retorna `false`
> per a arrays buits i entrades no-array/invàlides a causa de la comprovació interna `isFilledArray`.

### Avantatges

- Retorna `false` per a no-arrays i arrays buits en requerir un array emplenat mitjançant `isFilledArray`.
- Assegura que cada element és `undefined`, no només alguns, fent explícita la intenció.
- Útil com a predicat d'estil guard quan es validen col·leccions d'entrada desconegudes.

## Ús

### Sintaxi

Funció:

- `areUndefined(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per a elements `undefined`.

### Importació local de funció

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Nota: retorna false per a matrius buides
const r4 = areUndefined([]); // false

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areUndefined(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 13:55:01 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>