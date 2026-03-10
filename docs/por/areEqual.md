# areEqual

## Descrição

`areEqual` verifica se todos os elementos em um array são iguais a um determinado valor esperado, retornando `true`
apenas para arrays não vazios em que cada item corresponde.

### Caso de uso

Validar que uma lista contém apenas um único valor permitido (por exemplo, todos os sinalizadores de status são `true`,
todas as funções são `"admin"`, ou todas as entradas numéricas são iguais a uma constante exigida), tratando entrada
vazia como inválida (`false`).

> **Nota para utilizadores de TypeScript:**
>
> Use `areEqual` quando você precisar de uma verificação estrita de todos os itens; ele retorna `false` para arrays
> vazios e para qualquer entrada que não seja um array ou não esteja preenchida.

### Vantagens

- Retorna `true` somente quando cada elemento corresponde ao valor esperado; caso contrário, retorna `false`.
- Falha rapidamente: para de verificar assim que um elemento não correspondente é encontrado.
- Protege contra entrada inválida retornando `false` quando a entrada não é um array preenchido.

## Uso

### Sintaxe

Função:

- `areEqual(value, expected)`

Parâmetros:

- `value`: O array a ser verificado.
- `expected`: O elemento com o qual comparar cada item do array.

### Importação local da função

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areEqual(value, expected)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areEqual](../_analysis/areEqual.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:51:53 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>