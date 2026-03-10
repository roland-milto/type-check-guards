# isStream

## Descripció

`isStream` comprova si un valor determinat és un objecte stream (semblant a stream de Node.js, `ReadableStream` o
`WritableStream`).

### Cas d’ús

Valida entrades que poden ser objectes plans o streams (p. ex., pujades de fitxers, cossos HTTP o canals de
processament) i ramifica la lògica segons si el valor és un stream.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isStream` per restringir `unknown` abans de cridar mètodes de stream; reconeix objectes semblants a
> streams de Node.js (mitjançant `pipe`/`on`) i Web Streams (`ReadableStream`/`WritableStream`) quan existeixen aquestes
> globals.

### Avantatges

- Detecta de manera segura objectes habituals semblants a streams de Node.js comprovant les funcions `pipe` i `on`.
- També admet Web Streams reconeixent `ReadableStream` i `WritableStream` quan estan disponibles.
- Retorna un resultat booleà simple (`true`/`false`) adequat per a guards i lògica de ramificació.

## Ús

### Sintaxi

Funció:

- `isStream(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream és semblant a un flux; pots utilitzar amb seguretat les API comunes de fluxos
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isStream(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isStream](../_analysis/isStream.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 23:39:04 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>