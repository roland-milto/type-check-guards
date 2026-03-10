# areFinite

## Descripció

`areFinite` comprova si un valor és una matriu no buida els elements de la qual són tots nombres finits, retornant
`true` si és així i `false` en cas contrari.

### Cas d’ús

Valida matrius d'entrada numèrica (p. ex., sèries de gràfics, llistes de coordenades, mostres de mesura) abans de fer
càlculs, assegurant que el resultat sigui `true` només quan tots els valors siguin nombres finits.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areFinite` quan necessitis assegurar que una matriu no és buida i conté només nombres finits; retorna
`false` per a matrius buides i per a matrius que continguin `NaN` o infinits.

### Avantatges

- Retorna `true` només quan l'entrada és una matriu no buida i cada element és un nombre finit.
- Rebutja `Infinity`, `-Infinity` i `NaN` basant-se en comprovacions `isFinite` per a cada element.
- Proporciona un resultat booleà simple (`true`/`false`) adequat per a guardians i fluxos de validació.

## Ús

### Sintaxi

Funció:

- `areFinite(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per verificar la finitud de tots els seus elements.

### Importació local de funció

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // cert
console.log(areFinite(b)); // fals
console.log(areFinite(c)); // fals

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areFinite(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:33:50 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>