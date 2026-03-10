# isFinite

## Descripció

Determina si un `value` determinat és un `number` finit.

### Cas d’ús

Utilitza `isFinite` per validar una entrada desconeguda (p. ex., de JSON, formularis o API) abans de fer càlculs
numèrics, assegurant que el valor és un nombre real i finit.

> **Nota per als usuaris de TypeScript:**
>
> `isFinite` retorna `true` només per a nombres finits; retorna `false` per a `NaN`, `Infinity` i qualsevol valor que no
> sigui un nombre.

### Avantatges

- Utilitza el `Number.isFinite` integrat per a una comprovació fiable de finitud.
- Retorna `true` només per a nombres finits; retorna `false` per a `NaN`, `Infinity` i entrades que no són nombres.
- Predicat simple i sense efectes secundaris, adequat per a la validació i la lògica de protecció.

## Ús

### Sintaxi

Funció:

- `isFinite(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar per a la finitud.

### Importació local de funció

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers és: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value és un nombre finit aquí
  const doubled = value * 2;
  console.log(doubled);
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isFinite(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:29:08 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>