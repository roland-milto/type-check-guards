# isFalse

## Descripció

`isFalse` comprova si un valor donat és estrictament igual al literal booleà `false`.

### Cas d’ús

Valida dades desconegudes (p. ex., de JSON, paràmetres de consulta o entrada d'usuari) on només el valor booleà explícit
`false` s'hauria de tractar com un indicador vàlid, i tota la resta s'hauria de rebutjar.

> **Nota per als usuaris de TypeScript:**
>
> Utilitza `isFalse` quan necessitis acceptar només el literal `false` i rebutjar tots els altres valors falsos; retorna
`true` només per a `value === false`.

### Avantatges

- Proporciona una comprovació estricta del literal booleà `false` sense coerció.
- Ajuda a distingir `false` d'altres valors falsos com `0`, `""`, `null` i `undefined`.
- Millora la llegibilitat fent explícita la intenció quan es valida una entrada desconeguda.

## Ús

### Sintaxi

Funció:

- `isFalse(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // aquí input és exactament false
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isFalse(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 16:21:06 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>