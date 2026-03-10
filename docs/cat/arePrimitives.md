# arePrimitives

## Descripció

`arePrimitives` avalua si tots els elements d’un array proporcionat i no buit són de tipus primitiu.

### Cas d’ús

Valida que les dades entrants (p. ex., paràmetres de consulta, valors de files CSV o una llista d’IDs/etiquetes)
contenen només valors primitius abans de serialitzar, fer hash, registrar o passar-les a APIs que no han de rebre
objectes.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `arePrimitives` quan necessitis assegurar-te que un `unknown[]` conté només valors primitius (string,
> number, bigint, boolean, symbol, undefined o null) abans de continuar el processament.

### Avantatges

- Retorna `true` només quan cada element és un valor primitiu, cosa que el converteix en una comprovació estricta per a
  arrays «sense objectes/funcions».
- Falla ràpid: retorna `false` tan aviat com es troba un element no primitiu.
- També retorna `false` per a valors que no són arrays i per a arrays buits (mitjançant la comprovació d’array no buit),
  evitant l’acceptació accidental d’entrada invàlida.

## Ús

### Sintaxi

Funció:

- `arePrimitives(array)`

Paràmetres:

- `array`: L’array que s’ha de comprovar per veure si conté elements de tipus primitiu.

### Importació local de funció

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // cert
const r2 = arePrimitives(b); // cert
const r3 = arePrimitives(c); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.arePrimitives(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 00:00:33 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>