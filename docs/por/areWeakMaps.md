# areWeakMaps

## Descrição

`areWeakMaps` verifica se um valor é um array não vazio em que cada elemento é um `WeakMap`, retornando `true` apenas
nesse caso e `false` caso contrário.

### Caso de uso

Validar dados em tempo de execução (por exemplo, JSON analisado, entradas de plugins ou configuração com tipagem frouxa)
para garantir que seja um array não vazio de instâncias de `WeakMap` antes de iterar e chamar métodos de `WeakMap`;
retorna `false` quando qualquer elemento não é um `WeakMap` ou quando o array está vazio.

> **Nota para utilizadores de TypeScript:**
>
> Use `areWeakMaps` para validar uma entrada desconhecida antes de tratá-la como um `WeakMap[]` não vazio; ele retorna
`false` para arrays vazios.

### Vantagens

- Garante que cada elemento no array fornecido seja uma instância de `WeakMap`.
- Retorna `false` para arrays vazios, evitando a aceitação acidental de “nenhum dado” como entrada válida.
- Útil como uma verificação (guard) antes de executar operações específicas de `WeakMap` em todos os itens.

## Uso

### Sintaxe

Função:

- `areWeakMaps(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a instâncias de `WeakMap`.

### Importação local da função

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list é um array não vazio de instâncias de WeakMap
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // não é um WeakMap[] não vazio
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areWeakMaps(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 13:39:06 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>