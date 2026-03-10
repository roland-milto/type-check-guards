# areStreams

## Descripció

`areStreams` determina si un valor és una matriu plena en què cada element és un `Stream`.

### Cas d’ús

Valida col·leccions proporcionades per l'usuari o construïdes dinàmicament (p. ex., múltiples streams de lectura de
fitxers) abans de canalitzar-les, reprendre-les o operar-hi en grup d'una altra manera.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areStreams` per validar una entrada desconeguda abans de tractar-la com a `Stream[]`; retorna `true` només
> quan el valor és una matriu no buida i cada element és un `Stream`.

### Avantatges

- Assegura que una entrada és una matriu plena on cada element és un `Stream`.
- Proporciona una comprovació simple `true`/`false` per validar col·leccions de streams abans de processar-les.
- Falla ràpid: retorna `false` tan aviat com es troba un element que no és `Stream`.
- Ajuda a prevenir errors en temps d'execució quan el codi assumeix que tots els elements són instàncies de `Stream`.

## Ús

### Sintaxi

Funció:

- `areStreams(array)`

Paràmetres:

- `array`: La matriu que s'ha de comprovar per a objectes Stream.

### Importació local de funció

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input és una matriu plena d'objectes Stream
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areStreams(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:33:06 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>