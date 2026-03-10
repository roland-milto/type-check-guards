# areFloats

## Descripció

`areFloats` comprova si un array donat està omplert i tots els seus elements són floats.

### Cas d’ús

Fes servir `areFloats` quan reps un `unknown[]` (p. ex., de JSON, paràmetres de consulta o APIs externes) i necessites
assegurar-te que és un array omplert on cada element és un float abans d'executar lògica numèrica com ara mitjanes,
interpolació o càlculs estadístics.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areFloats` per protegir `unknown[]` abans de tractar-lo com a `number[]` que conté només floats; retorna
`false` per a arrays buits i per a qualsevol element que no sigui float.

### Avantatges

- Retorna `true` només quan l'entrada és un array no buit i cada element és un float.
- Falla ràpid: retorna `false` tan aviat com es troba un element que no és float.
- Ajuda a validar una entrada desconeguda abans de fer càlculs específics de floats.

## Ús

### Sintaxi

Funció:

- `areFloats(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per veure si conté elements float.

### Importació local de funció

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // cert
console.log(areFloats(b)); // fals
console.log(areFloats(c)); // fals

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // nul
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areFloats(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 15:56:31 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>