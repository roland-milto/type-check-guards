# isWeakMap

## Descrição

Determina se um determinado `value` é uma instância de `WeakMap`.

### Caso de uso

Use `isWeakMap` quando você aceita um valor `unknown` (por exemplo, de uma API pública, sistema de plugins ou
configuração dinâmica) e precisa verificar se ele é um `WeakMap` antes de usar um comportamento específico de `WeakMap`.

> **Nota para utilizadores de TypeScript:**
>
> `isWeakMap` realiza uma verificação `instanceof WeakMap`; é uma guarda em tempo de execução que retorna `true` apenas
> para instâncias reais de `WeakMap`.

### Vantagens

- Verificação simples em tempo de execução para saber se um valor é um `WeakMap`.
- Ajuda a evitar o uso incorreto de APIs que exigem um `WeakMap` ao retornar `true`/`false` em vez de lançar uma
  exceção.
- Funciona com entradas `unknown`, tornando-o conveniente nas fronteiras do módulo (por exemplo, parsing, dados externos
  ou código sem tipagem).

## Uso

### Sintaxe

Função:

- `isWeakMap(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a é um WeakMap em tempo de execução
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isWeakMap(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:26:33 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>