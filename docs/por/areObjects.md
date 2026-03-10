# areObjects

## Descrição

`areObjects` verifica se um array preenchido fornecido contém apenas objetos.

### Caso de uso

Use `areObjects` quando você receber um array desconhecido (por exemplo, de parsing de JSON ou de APIs externas) e
precisar garantir que ele não esteja vazio e que cada elemento seja um objeto antes de iterar e acessar propriedades do
objeto.

> **Nota para utilizadores de TypeScript:**
>
> Use `areObjects` para validar `unknown[]` antes de tratar os itens como objetos; ele retorna `false` para arrays
> vazios.

### Vantagens

- Retorna `true` somente quando a entrada é um array preenchido e cada elemento é um objeto.
- Interrompe cedo e retorna `false` assim que um elemento que não é objeto é encontrado.
- Ajuda a validar uma entrada desconhecida antes de realizar operações específicas de objetos.

## Uso

### Sintaxe

Função:

- `areObjects(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos do tipo objeto.

### Importação local da função

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value é um array preenchido de objetos
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areObjects(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:10:05 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>