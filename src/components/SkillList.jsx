import { skills } from "../data/skills";

export function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill key={skill.skill} {...skill} />
      ))}
    </ul>
  );
}

function Skill({ skill, emoji, bgcolor }) {
  return (
    <li className="skill" style={{ backgroundColor: bgcolor }}>
      {emoji} {skill}
    </li>
  );
}
