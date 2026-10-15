import type { SlideDefinition } from "./types";
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide02Problem } from "./slides/Slide02Problem";
import { Slide03ArticleCover } from "./slides/Slide03ArticleCover";
import { Slide04ArticleContext } from "./slides/Slide04ArticleContext";
import { Slide05ArticleMethod } from "./slides/Slide05ArticleMethod";
import { Slide06ArticleResult } from "./slides/Slide06ArticleResult";
import { Slide07MupungaCover } from "./slides/Slide07MupungaCover";
import { Slide08MupungaTable } from "./slides/Slide08MupungaTable";
import { Slide07Objective } from "./slides/Slide07Objective";
import { Slide19TraceOverview, Slide20TraceCell, Slide21TraceReader, Slide22TraceTool, Slide23TraceNormalizer, Slide24TraceAuditor, Slide25TraceRecord, Slide26TraceSummary } from "./slides/Slide09Traceability";
import { Slide10ArchitectureEvolution } from "./slides/Slide10ArchitectureEvolution";
import { Slide11Pipeline } from "./slides/Slide11Pipeline";
import { Slide14ArticlePreparation } from "./slides/Slide14ArticlePreparation";
import { Slide15TableOriginal } from "./slides/Slide15TableOriginal";
import { Slide16TableCrop } from "./slides/Slide16TableCrop";
import { Slide16TableDocling } from "./slides/Slide16TableDocling";
import { Slide17TableVision } from "./slides/Slide17TableVision";
import { Slide14NormalizationAudit } from "./slides/Slide14NormalizationAudit";
import { Slide16Interface } from "./slides/Slide16Interface";
import { Slide17Evaluation } from "./slides/Slide17Evaluation";
import { Slide18Coverage } from "./slides/Slide18Coverage";
import { Slide19FieldCorrespondence } from "./slides/Slide19FieldCorrespondence";
import { Slide20Interpretation } from "./slides/Slide20Interpretation";
import { Slide21NextSteps } from "./slides/Slide21NextSteps";
import { Slide22Closing } from "./slides/Slide22Closing";

export const slides: SlideDefinition[] = [
  { number: 1, title: "Pipeline rastreável para extração de dados de ocorrência de micotoxinas", component: Slide01Cover },
  { number: 2, title: "O problema começa antes da IA", component: Slide02Problem },
  { number: 3, title: "Artigo completo", component: Slide03ArticleCover },
  { number: 4, title: "Contexto da amostragem", component: Slide04ArticleContext },
  { number: 5, title: "Método analítico", component: Slide05ArticleMethod },
  { number: 6, title: "Ocorrência extraída", component: Slide06ArticleResult },
  { number: 7, title: "Segundo artigo completo", component: Slide07MupungaCover },
  { number: 8, title: "Tabela com múltiplos cabeçalhos", component: Slide08MupungaTable },
  { number: 9, title: "Objetivo do trabalho", component: Slide07Objective },
  { number: 10, title: "Fluxo da implementação atual", component: Slide11Pipeline },
  { number: 11, title: "A arquitetura mudou durante o desenvolvimento", component: Slide10ArchitectureEvolution },
  { number: 12, title: "Antes da leitura, o PDF vira uma lista de itens com ID", component: Slide14ArticlePreparation },
  { number: 13, title: "Tabelas exigem um tratamento diferente do texto", component: Slide15TableOriginal },
  { number: 14, title: "A Tabela 6 na orientação de leitura", component: Slide16TableCrop },
  { number: 15, title: "A mesma tabela convertida pelo Docling", component: Slide16TableDocling },
  { number: 16, title: "A mesma tabela reconstruída por modelo de visão", component: Slide17TableVision },
  { number: 17, title: "O normalizador padroniza os termos; o auditor decide cada linha", component: Slide14NormalizationAudit },
  { number: 18, title: "O caminho completo de uma ocorrência", component: Slide19TraceOverview },
  { number: 19, title: "O caminho completo de uma ocorrência", component: Slide20TraceCell },
  { number: 20, title: "O caminho completo de uma ocorrência", component: Slide21TraceReader },
  { number: 21, title: "O caminho completo de uma ocorrência", component: Slide22TraceTool },
  { number: 22, title: "O caminho completo de uma ocorrência", component: Slide23TraceNormalizer },
  { number: 23, title: "O caminho completo de uma ocorrência", component: Slide24TraceAuditor },
  { number: 24, title: "O caminho completo de uma ocorrência", component: Slide25TraceRecord },
  { number: 25, title: "O caminho completo de uma ocorrência", component: Slide26TraceSummary },
  { number: 26, title: "A interface apoia acompanhamento e conferência", component: Slide16Interface },
  { number: 27, title: "Como a avaliação preliminar foi feita", component: Slide17Evaluation },
  { number: 28, title: "A saída cobriu quase toda a catalogação do recorte", component: Slide18Coverage },
  { number: 29, title: "A correspondência varia bastante entre os campos", component: Slide19FieldCorrespondence },
  { number: 30, title: "Uma divergência não identifica automaticamente um erro", component: Slide20Interpretation },
  { number: 31, title: "Síntese e próximos passos", component: Slide21NextSteps },
  { number: 32, title: "Obrigado", component: Slide22Closing },
];
