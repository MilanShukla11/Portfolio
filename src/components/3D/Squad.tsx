import { SQUAD_DATA } from './SquadData';
import SkillNode from './SkillNode';

export default function Squad() {
  return (
    <group>
      {SQUAD_DATA.map((node) => (
        <SkillNode key={node.id} data={node} />
      ))}
    </group>
  );
}