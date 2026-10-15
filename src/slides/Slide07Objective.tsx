import { Bullet, Header, Rule, Slide, Text } from "../components/SlidePrimitives";
import type { SlideProps } from "../types";

export function Slide07Objective(_: SlideProps) {
  return (
    <Slide>
      <Header title="Objetivo do trabalho" number={9} section="Proposta" />
      <Text style={{ left: 105, top: 178, width: 1070, height: 126, fontSize: 34, lineHeight: 1.3, fontWeight: 700, color: "var(--navy)", textAlign: "center" }}>Desenvolver e avaliar um pipeline rastreável que auxilie a ampliação do banco de ocorrências de micotoxinas.</Text>
      <Rule left={250} top={335} width={780} height={4} color="var(--orange)" />
      <Bullet top={390} left={180} width={820} fontSize={24}>Modelos de linguagem interpretam o artigo.</Bullet>
      <Bullet top={465} left={180} width={850} height={65} fontSize={24}>Procedimentos determinísticos validam, normalizam, calculam e montam os registros.</Bullet>
      <Bullet top={550} left={180} width={820} fontSize={24}>A equipe confere cada registro com acesso à evidência original.</Bullet>
    </Slide>
  );
}
