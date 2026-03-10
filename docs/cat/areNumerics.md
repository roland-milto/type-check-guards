# areNumerics

## Descripció

`areNumerics` comprova si un valor és una matriu no buida on tots els elements són numèrics.

### Cas d’ús

Fes servir `areNumerics` per validar dades externes o sense tipar (p. ex., càrregues JSON, paràmetres de consulta,
entrada de formularis) abans de calcular sumes, mitjanes o altres operacions numèriques, assegurant que l’entrada és una
matriu numèrica no buida i retornant `false` en cas contrari.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areNumerics` per protegir una entrada `unknown` abans de tractar-la com una matriu numèrica; retorna
`false` per a valors que no són matrius i per a matrius buides.

### Avantatges

- Retorna `true` només quan l’entrada és una matriu no buida i cada element és numèric.
- Falla ràpid: deixa de comprovar tan aviat com es troba un element no numèric, retornant `false`.
- Ajuda a validar de manera segura una entrada desconeguda abans de fer operacions numèriques.

## Ús

### Sintaxi

Funció:

- `areNumerics(array)`

Paràmetres:

- `array`: La matriu que s’ha de comprovar per veure si conté elements numèrics.

### Importació local de funció

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // cert
console.log(areNumerics(b)); // cert
console.log(areNumerics(c)); // fals
console.log(areNumerics(d)); // fals
console.log(areNumerics(e)); // fals

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // nul
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areNumerics(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>El fitxer es va generar el 6 February 2026 at 16:04:15 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>