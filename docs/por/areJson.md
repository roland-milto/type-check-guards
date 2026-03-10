# areJson

## Descrição

Verifica se todos os elementos de um array são strings JSON, retornando `true` apenas se o array estiver preenchido e
cada item for JSON válido; caso contrário, retorna `false`.

### Caso de uso

Validar dados recebidos (por exemplo, de parâmetros de query, variáveis de ambiente ou APIs externas) quando você espera
um array de strings codificadas em JSON e quer rejeitar arrays vazios ou quaisquer entradas não-JSON.

> **Nota para utilizadores de TypeScript:**
>
> Use `areJson` quando você precisar validar que um `unknown[]` contém apenas strings JSON antes de analisá-las (por
> exemplo, com `JSON.parse`).

### Vantagens

- Retorna `true` apenas quando cada elemento é uma string JSON válida; caso contrário, retorna `false`.
- Falha rapidamente: para de verificar assim que um elemento não-JSON é encontrado.
- Rejeita arrays vazios por design, retornando `false` para entradas não preenchidas.

## Uso

### Sintaxe

Função:

- `areJson(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos que sejam strings JSON.

### Importação local da função

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // verdadeiro
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // falso
const empty = areJson([]); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areJson(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areJson](../_analysis/areJson.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 16:17:10 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>