# isBigInt

## Descripció

`isBigInt` comprova si un valor determinat és del tipus `bigint`, retornant `true` per a primitives BigInt i `false` en
cas contrari.

### Cas d’ús

Valida i restringeix valors que provenen de fonts sense tipar (p. ex., anàlisi de JSON, entrada d'usuari, API externes)
abans de fer càlculs específics de BigInt o desar-los en camps només de BigInt.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isBigInt` per restringir `unknown` a `bigint` abans de fer aritmètica amb BigInt (p. ex., `+`, `*`), que
> requereix operands BigInt.

### Avantatges

- Proporciona una comprovació d'execució simple i fiable per al tipus primitiu `bigint`.
- Ajuda a restringir valors `unknown` abans de fer operacions només de BigInt.
- Evita falsos positius: els nombres normals, les cadenes i altres tipus retornen `false`.

## Ús

### Sintaxi

Funció:

- `isBigInt(value)`

Paràmetres:

- `value`: El valor que s'ha de comprovar.

### Importació local de funció

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // cert
console.log(isBigInt(10));  // fals
console.log(isBigInt("10")); // fals
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isBigInt(value)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:31:17 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>