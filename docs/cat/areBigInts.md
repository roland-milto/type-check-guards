# areBigInts

## Descripció

`areBigInts` determina si un valor és una matriu no buida que conté només valors `bigint`.

### Cas d’ús

Valida una entrada desconeguda (p. ex., dades tipus JSON analitzades, càrregues útils d'API o paràmetres de funció
tipats com `unknown`) per assegurar que és una matriu no buida de valors `bigint` abans de processar-la; retorna `true`
només quan tots els elements són `bigint`, altrament `false`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areBigInts` com a guarda en temps d'execució abans de fer operacions només de `bigint` (p. ex.,
> aritmètica, comparacions) sobre una entrada desconeguda.

### Avantatges

- Assegura que cada element és un `bigint`, retornant `true` només quan tota la matriu coincideix.
- Rebutja les no-matrius i les matrius buides per disseny (mitjançant `isFilledArray`), evitant l'acceptació accidental
  d'entrades no vàlides.
- Fallada ràpida: retorna `false` tan aviat com es troba un element que no és `bigint`.

## Ús

### Sintaxi

Funció:

- `areBigInts(array)`

Paràmetres:

- `array`: El valor a comprovar.

### Importació local de funció

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); // cert
console.log(areBigInts(b)); // fals
console.log(areBigInts(c)); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areBigInts(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areBigInts](../_analysis/areBigInts.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:25:24 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>