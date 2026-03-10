# areFalse

## Descripció

`areFalse` comprova si tots els elements d'un array proporcionat són estrictament el booleà `false`.

### Cas d’ús

Valida que una llista de feature flags, comprovacions o resultats de guards siguin tots `false` abans de continuar (p.
ex., confirmar que no hi ha condicions bloquejants).

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `areFalse` quan necessitis una validació estricta que un array no sigui buit i que contingui només el valor
> booleà `false`.

### Avantatges

- Assegura que cada element sigui estrictament `false` (sense coerció de valors truthy/falsey).
- Retorna `false` per a no-arrays o arrays buits exigint un array emplenat mitjançant `isFilledArray`.
- S'atura aviat en el primer element que no sigui `false` per eficiència.

## Ús

### Sintaxi

Funció:

- `areFalse(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar, que conté elements de qualsevol tipus.

### Importació local de funció

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // cert
const b = areFalse([false, true, false]);  // fals
const c = areFalse([false, "false", false]); // fals
const d = areFalse([]); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areFalse(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 16:16:23 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>