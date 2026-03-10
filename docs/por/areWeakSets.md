# areWeakSets

## Descrição

Verifica se uma entrada é um array não vazio em que cada elemento é um `WeakSet`, retornando `true` apenas nesse caso.

### Caso de uso

Validar entradas em tempo de execução (por exemplo, de APIs, configuração ou dados fornecidos pelo usuário) para
garantir que você tenha uma lista não vazia de instâncias de `WeakSet` antes de prosseguir com a lógica que depende do
comportamento de `WeakSet`.

> **Nota para utilizadores de TypeScript:**
>
> Use `areWeakSets` para validar uma entrada desconhecida antes de tratá-la como `WeakSet[]`. Ele retorna `false` para
> arrays vazios e para valores que não são arrays.

### Vantagens

- Garante que cada elemento no array de entrada seja um `WeakSet`.
- Retorna `false` para arrays vazios, evitando resultados acidentais de “tudo válido” quando há dados ausentes.
- Falha com segurança ao retornar `false` quando a entrada não é um array preenchido (incluindo `null`).
- Útil como uma verificação de guarda antes de realizar operações que exigem instâncias de `WeakSet`.

## Uso

### Sintaxe

Função:

- `areWeakSets(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a objetos `WeakSet`.

### Importação local da função

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a é um array não vazio de instâncias de WeakSet
}

console.log(areWeakSets(a)); // verdadeiro
console.log(areWeakSets(b)); // falso
console.log(areWeakSets(c)); // falso
console.log(areWeakSets(null as unknown)); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areWeakSets(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:10:30 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>