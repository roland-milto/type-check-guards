# arePromises

## Descrição

`arePromises` determina se todos os elementos em um array são instâncias de `Promise`.

### Caso de uso

Validar que uma lista construída dinamicamente ou fornecida externamente contém apenas promises antes de agregá-las (por
exemplo, com `Promise.all`).

> **Nota para utilizadores de TypeScript:**
>
> Use `arePromises` para validar `unknown[]` antes de chamar `Promise.all` ou outras operações exclusivas de promises;
> ele retorna `false` para arrays vazios.

### Vantagens

- Garante que cada elemento seja uma `Promise` antes de você prosseguir com lógica específica de promises.
- Retorna `false` para arrays não preenchidos, evitando resultados ambíguos para entradas vazias.
- Útil como uma proteção em tempo de execução ao trabalhar com `unknown[]` de fontes externas.

## Uso

### Sintaxe

Função:

- `arePromises(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a instâncias de Promise.

### Importação local da função

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values é um array de instâncias de Promise em tempo de execução
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.arePromises(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 23:49:35 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>