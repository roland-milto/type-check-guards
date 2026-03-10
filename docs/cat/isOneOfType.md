# isOneOfType

## Descripció

`isOneOfType` determina si un `value` donat coincideix amb almenys una de les cadenes de tipus proporcionades, retornant
`true` si es troba alguna coincidència i `false` en cas contrari.

### Cas d’ús

Valida dades de tipatge lax o externes (p. ex., JSON analitzat, paràmetres de consulta) permetent diversos tipus
acceptables en temps d'execució (com ara `number` o `string`) abans de continuar amb més lògica.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `isOneOfType` quan vulguis una comprovació en temps d'execució que un valor coincideixi amb qualsevol d'
> entre diversos tipus permesos; retorna `true` si com a mínim un tipus coincideix, altrament `false`.

### Avantatges

- Comprova un valor contra diversos tipus permesos en una sola crida, retornant `true` a la primera coincidència.
- Funciona amb entrades `unknown`, cosa que el fa útil als límits d'execució (p. ex., dades externes, entrada d'usuari).
- Resultat booleà simple (`true`/`false`) que es compon bé amb la lògica condicional i els retorns anticipats.

## Ús

### Sintaxi

Funció:

- `isOneOfType(value, types)`

Paràmetres:

- `value`: El valor que s'ha de comprovar contra els tipus especificats.
- `types`: Un array de cadenes de tipus que representen els possibles tipus del valor.

### Importació local de funció

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input és un objecte en temps d'execució
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.isOneOfType(value, types)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>El fitxer es va generar el 31 January 2026 at 23:42:36 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>