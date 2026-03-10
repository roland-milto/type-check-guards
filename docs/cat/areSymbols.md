# areSymbols

## Descripció

Comprova si una entrada és un array emplenat els elements del qual són tots símbols, retornant `true` o `false`.

### Cas d’ús

Valida que un camp de configuració (p. ex., una llista de claus úniques representades com a símbols) sigui un array no
buit que contingui només símbols abans d'utilitzar-lo en API que requereixen `symbol[]`.

> **Nota per als usuaris de TypeScript:**
>
> Fes servir `areSymbols` per validar una entrada desconeguda abans de tractar-la com a `symbol[]`; retorna `false` per
> a no-arrays i arrays buits.

### Avantatges

- Retorna `true` només quan l'entrada és un array no buit i cada element és un símbol.
- Evita falsos positius rebutjant els no-arrays i els arrays buits mitjançant la comprovació interna d'array emplenat.
- Útil com a guarda de tipus en temps d'execució per validar llistes només de símbols abans de continuar el
  processament.

## Ús

### Sintaxi

Funció:

- `areSymbols(array)`

Paràmetres:

- `array`: L'array que s'ha de comprovar per veure si conté elements de tipus símbol.

### Importació local de funció

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a és una matriu només de símbols en temps d'execució
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Importació global d’objecte

Per importar les funcions com a mètodes globals d’objecte, utilitza:

```ts
import "@type-check/guards/register-global-object.mjs";
```

El mètode següent estarà disponible globalment:

- `Type.areSymbols(array)`

## Anàlisi de funcions

Aquí es documenta una anàlisi tabular de la sortida generada quan s’insereixen diferents paràmetres a les
funcions: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>El fitxer es va generar el 30 January 2026 at 14:20:53 (UTC) amb l’ús de *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** per *
*[Roland Milto](https://roland-milto.de/)**.</small>