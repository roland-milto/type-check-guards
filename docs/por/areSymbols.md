# areSymbols

## Descrição

Verifica se uma entrada é um array preenchido cujos elementos são todos símbolos, retornando `true` ou `false`.

### Caso de uso

Validar que um campo de configuração (por exemplo, uma lista de chaves únicas representadas como símbolos) é um array
não vazio contendo apenas símbolos antes de usá-lo em APIs que exigem `symbol[]`.

> **Nota para utilizadores de TypeScript:**
>
> Use `areSymbols` para validar uma entrada desconhecida antes de tratá-la como `symbol[]`; ela retorna `false` para
> não-arrays e arrays vazios.

### Vantagens

- Retorna `true` apenas quando a entrada é um array não vazio e cada elemento é um símbolo.
- Evita falsos positivos ao rejeitar não-arrays e arrays vazios por meio da verificação interna de array preenchido.
- Útil como um type guard em tempo de execução para validar listas contendo apenas símbolos antes de processamento
  adicional.

## Uso

### Sintaxe

Função:

- `areSymbols(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos do tipo símbolo.

### Importação local da função

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a é um array somente de símbolos em tempo de execução
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areSymbols(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:23:23 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>