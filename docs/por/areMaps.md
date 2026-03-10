# areMaps

## Descrição

`areMaps` determina se um determinado array não está vazio e se todos os seus elementos são instâncias de `Map`.

### Caso de uso

Validar entrada desconhecida (por exemplo, de parsing de JSON, APIs externas ou fontes dinâmicas) antes de tratá-la como
uma lista não vazia de objetos `Map`.

> **Nota para utilizadores de TypeScript:**
>
> Retorna `false` para um array vazio; só retorna `true` quando o array está preenchido e cada elemento é um `Map`.

### Vantagens

- Garante que cada elemento seja uma instância de `Map`, retornando `true` somente quando todo o array passa na
  verificação.
- Rejeita arrays vazios por design, evitando a aceitação acidental de “nenhum dado” como entrada válida.
- Útil como uma guarda antes de executar operações específicas de `Map` (por exemplo, `.get()`, `.set()`, iteração) em
  uma coleção.

## Uso

### Sintaxe

Função:

- `areMaps(array)`

Parâmetros:

- `array`: O array a ser verificado.

### Importação local da função

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  // items é garantido como um array não vazio de instâncias de Map em tempo de execução
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  // falso para: arrays vazios ou arrays que contenham qualquer valor que não seja Map
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areMaps(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areMaps](../_analysis/areMaps.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 16:14:14 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>