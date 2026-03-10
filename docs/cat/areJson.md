# areJson

## Descripció

Comprova si tots els elements d'un array són cadenes JSON, retornant `true` només si l'array està emplenat i cada
element és JSON vàlid; en cas contrari retorna `false`.

### Cas d’ús

Valida dades entrants (p. ex., de paràmetres de consulta, variables d'entorn o APIs externes) quan esperes un array de
cadenes codificades en JSON i vols rebutjar arrays buits o qualsevol entrada que no sigui JSON.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areJson` quan necessitis validar que un `unknown[]` conté només cadenes JSON abans de parsejar-les (p.
> ex., amb `JSON.parse`).

### Avantatges

- Retorna `true` només quan cada element és una cadena JSON vàlida; en cas contrari retorna `false`.
- Falla ràpid: deixa de comprovar tan aviat com es troba un element que no és JSON.
- Rebutja els arrays buits per disseny, retornant `false` per a una entrada no emplenada.

## Ús

### Sintaxi

Funció:

- `areJson(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per veure si conté elements que són cadenes JSON.

### Importació local de funció

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // cert
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // fals
const empty = areJson([]); // fals

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areJson(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areJson](../_analysis/areJson.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 16:15:13 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>