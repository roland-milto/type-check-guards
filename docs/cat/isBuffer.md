# isBuffer

## Descripció

Comprova si un valor és un `Buffer` de Node.js i retorna `true` o `false`.

### Cas d’ús

Valida les entrades en temps d'execució (p. ex., càrregues útils d'API, dades de fitxer o búfers de missatges) per
assegurar que un valor és un `Buffer` abans de processar-lo, i obtenir de manera fiable `false` quan s'executa fora de
Node.js on `Buffer` pot no existir.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isBuffer` per estrènyer valors `unknown` a `Buffer` abans de cridar mètodes específics de Buffer.

### Avantatges

- Detecta de manera segura instàncies de `Buffer` de Node.js mitjançant `Buffer.isBuffer`.
- Retorna `false` en entorns on `Buffer` no està disponible, evitant errors en temps d'execució.
- Funciona amb entrades `unknown`, cosa que el fa adequat per a la validació en temps d'execució i l'estrenyiment de
  tipus.

## Ús

### Sintaxi

Funció:

- `isBuffer(value)`

Paràmetres:

- `value`: El valor que s'ha de provar.

### Importació local de funció

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // cert
console.log(isBuffer(b)); // fals

if (isBuffer(a)) {
  // a és un Buffer aquí
  console.log(a.toString("utf8"));
}
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isBuffer(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 16:30:58 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>