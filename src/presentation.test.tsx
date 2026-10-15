import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { articleStates, articleStepFromSlideIndex } from "./components/ArticleCamera";
import { mupungaStates, mupungaStepFromSlideIndex } from "./components/ArticleCameraMupunga";
import { Controls } from "./components/Controls";
import { clampSlide, keyDelta, parseSlideHash, slideHash, transitionDuration } from "./navigation";
import { slides } from "./slides";
import { correspondenceData } from "./slides/Slide19FieldCorrespondence";

describe("registro dos slides", () => {
  it("mantém 32 componentes únicos e ordenados", () => {
    expect(slides).toHaveLength(32);
    expect(slides.map((slide) => slide.number)).toEqual(Array.from({ length: 32 }, (_, index) => index + 1));
    expect(new Set(slides.map((slide) => slide.component)).size).toBe(32);
  });

  it("preserva os títulos inicial e final", () => {
    expect(slides.map((slide) => slide.title)).toEqual([
      "Pipeline rastreável para extração de dados de ocorrência de micotoxinas",
      "O problema começa antes da IA",
      "Artigo completo",
      "Contexto da amostragem",
      "Método analítico",
      "Ocorrência extraída",
      "Segundo artigo completo",
      "Tabela com múltiplos cabeçalhos",
      "Objetivo do trabalho",
      "Fluxo da implementação atual",
      "A arquitetura mudou durante o desenvolvimento",
      "Antes da leitura, o PDF vira uma lista de itens com ID",
      "Tabelas exigem um tratamento diferente do texto",
      "A Tabela 6 na orientação de leitura",
      "A mesma tabela convertida pelo Docling",
      "A mesma tabela reconstruída por modelo de visão",
      "O normalizador padroniza os termos; o auditor decide cada linha",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "O caminho completo de uma ocorrência",
      "A interface apoia acompanhamento e conferência",
      "Como a avaliação preliminar foi feita",
      "A saída cobriu quase toda a catalogação do recorte",
      "A correspondência varia bastante entre os campos",
      "Uma divergência não identifica automaticamente um erro",
      "Síntese e próximos passos",
      "Obrigado",
    ]);
  });
});

describe("navegação", () => {
  it("interpreta, limita e gera hashes", () => {
    expect(parseSlideHash("#/slide/6")).toBe(6);
    expect(parseSlideHash("#/slide/999")).toBe(32);
    expect(parseSlideHash("#qualquer-coisa")).toBe(1);
    expect(slideHash(19)).toBe("#/slide/19");
    expect(clampSlide(0)).toBe(1);
  });

  it("mapeia teclas de avanço e retorno", () => {
    expect(keyDelta("ArrowRight")).toBe(1);
    expect(keyDelta(" ")).toBe(1);
    expect(keyDelta("PageUp")).toBe(-1);
    expect(keyDelta("Enter")).toBe(0);
  });

  it("remove duração quando o usuário reduz movimento", () => {
    expect(transitionDuration(true)).toBe(0);
    expect(transitionDuration(false)).toBeGreaterThan(1);
  });
});

describe("estudo de caso", () => {
  it("define os quatro estados da mesma sequência", () => {
    expect(Object.keys(articleStates)).toEqual(["cover", "context", "method", "result"]);
    expect(articleStepFromSlideIndex(2)).toBe("cover");
    expect(articleStepFromSlideIndex(5)).toBe("result");
    expect(articleStepFromSlideIndex(6)).toBeNull();
  });

  it("marca apenas os literais previstos por etapa", () => {
    expect(articleStates.cover.highlights).toHaveLength(0);
    expect(articleStates.context.highlights.map((item) => item.label)).toEqual(["janeiro de 2021", "dezembro de 2024", "Polônia"]);
    expect(articleStates.method.highlights.map((item) => item.label)).toEqual(["HPLC com detecção por MS/MS"]);
    expect(articleStates.result.highlights).toHaveLength(6);
  });

  it("define os dois estados da sequência complementar de tabela", () => {
    expect(Object.keys(mupungaStates)).toEqual(["cover", "table"]);
    expect(mupungaStepFromSlideIndex(6)).toBe("cover");
    expect(mupungaStepFromSlideIndex(7)).toBe("table");
    expect(mupungaStepFromSlideIndex(8)).toBeNull();
  });
});

describe("conteúdo e acessibilidade", () => {
  it("mantém os dez valores do gráfico", () => {
    expect(correspondenceData).toEqual([
      ["Micotoxina", 218], ["Produto", 190], ["Apresentação", 136], ["Categoria", 150], ["País", 224],
      ["Método", 142], ["Nº de amostras", 225], ["Positividade", 210], ["Média", 175], ["Máximo", 209],
    ]);
  });

  it("não deixa imagens informativas sem texto alternativo", () => {
    for (const definition of slides.filter((slide) => ![3, 4, 5, 6, 7, 8].includes(slide.number))) {
      const Component = definition.component;
      const html = renderToStaticMarkup(<Component previousIndex={0} reducedMotion />);
      const imageTags = html.match(/<img\b[^>]*>/g) ?? [];
      imageTags.forEach((tag) => expect(tag).toMatch(/alt="[^"]+"/));
    }
  });

  it("rotula os controles de apresentação", () => {
    const html = renderToStaticMarkup(<Controls current={2} total={24} onPrevious={() => {}} onNext={() => {}} onFullscreen={() => {}} />);
    expect(html).toContain('aria-label="Slide anterior"');
    expect(html).toContain('aria-label="Próximo slide"');
    expect(html).toContain('aria-label="Entrar em tela cheia"');
  });
});
