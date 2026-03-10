# areTrue

## Descrição

Verifica se um array não vazio contém apenas valores booleanos `true`.

### Caso de uso

Use `areTrue` para validar que um conjunto de pré-condições ou feature flags está totalmente habilitado (todos os
valores são `true`) antes de continuar, tratando entradas vazias ou malformadas como não satisfeitas (`false`).

> **Nota para utilizadores de TypeScript:**
>
> `areTrue` retorna `false` para um array vazio e para arrays que contenham qualquer valor que não seja estritamente
`true`.

### Vantagens

- Retorna `true` somente quando cada elemento é estritamente `true` e o array não está vazio.
- Falha rapidamente: retorna `false` assim que um valor diferente de `true` é encontrado.
- Rejeita entradas inválidas (não-arrays ou arrays vazios) retornando `false`.

## Uso

### Sintaxe

Função:

- `areTrue(array)`

Parâmetros:

- `array`: O array a ser verificado para garantir que todos os valores sejam `true`.

### Importação local da função

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areTrue(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:52:32 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>