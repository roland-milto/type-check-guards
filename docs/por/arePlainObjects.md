# arePlainObjects

## Descrição

Verifica se todos os elementos de um array são objetos simples, retornando `true` apenas se cada elemento se qualificar.

### Caso de uso

Validar dados externos ou sem tipagem (por exemplo, JSON analisado, payloads de API, envios de formulários) para
garantir que você recebeu um array não vazio em que cada entrada é um objeto simples antes de iterar e ler propriedades.

> **Nota para utilizadores de TypeScript:**
>
> Use `arePlainObjects` para validar uma entrada desconhecida antes de tratá-la como `Record<string, unknown>[]` (ou uma
> forma de objeto mais restrita) em TypeScript.

### Vantagens

- Garante que cada elemento no array de entrada seja um objeto simples, retornando `true` apenas quando todos os itens
  correspondem.
- Rejeita entradas inválidas antecipadamente (não-arrays ou arrays vazios) retornando `false`.
- Trata tanto objetos literais quanto objetos `Object.create(null)` como objetos simples válidos.

## Uso

### Sintaxe

Função:

- `arePlainObjects(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos que sejam objetos simples.

### Importação local da função

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // verdadeiro
const b = arePlainObjects([{}, Object.create(null)]); // verdadeiro
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // falso
const d = arePlainObjects([] as unknown[]); // falso
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.arePlainObjects(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 16:55:30 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>