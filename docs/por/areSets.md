# areSets

## Descrição

Verifica se um determinado array não vazio contém apenas instâncias de `Set`, retornando `true` se contiver e `false`
caso contrário.

### Caso de uso

Validar que um valor (por exemplo, de entrada do usuário, parsing de JSON ou APIs externas) é um array não vazio de
objetos `Set` antes de processar cada set.

> **Nota para utilizadores de TypeScript:**
>
> Use `areSets` para validar uma entrada desconhecida antes de iterar e chamar APIs de `Set` (por exemplo, `.size`,
`.has`, `.add`) em cada elemento.

### Vantagens

- Retorna `true` somente quando a entrada é um array não vazio e cada elemento é uma instância de `Set`.
- Evita falsos positivos para arrays vazios ao retornar `false` quando o array não tem elementos.
- Útil como uma verificação em tempo de execução antes de realizar operações específicas de `Set` em cada elemento.

## Uso

### Sintaxe

Função:

- `areSets(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a instâncias de `Set`.

### Importação local da função

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  // a é um array de instâncias de Set em tempo de execução
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); // falso
console.log(areSets(c)); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areSets(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areSets](../_analysis/areSets.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:14:58 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>