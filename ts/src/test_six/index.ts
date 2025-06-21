import { DataExample, SkillName, Trait, Skill } from "./types";

const exampleBuild: DataExample[] = [
  {
    data: {
      Uuid: "1",
      userName: "JohnDoe",
      accountAge: new Date("2025-01-01"),
      genetics: { gene: "123", traits: [Trait.STRONG, Trait.FREE_SPIRIT] },
      class: {
        skills: [
          { name: SkillName.Attack, description: "Attack", level: 1 },
          { name: SkillName.Defense, description: "Defense", level: 1 },
          { name: SkillName.Magic, description: "Magic", level: 1 },
          { name: SkillName.Ranged, description: "Ranged", level: 1 },
        ],
      },
    },
  },
  {
    data: {
      Uuid: "2",
      userName: "xxrepelxx",
      accountAge: new Date("2025-01-01"),
      genetics: { gene: "123", traits: [Trait.STRONG, Trait.FREE_SPIRIT] },
      class: {
        skills: [
          { name: SkillName.Attack, description: "Attack", level: 46 },
          { name: SkillName.Defense, description: "Defense", level: 22 },
          { name: SkillName.Magic, description: "Magic", level: 28 },
          { name: SkillName.Ranged, description: "Ranged", level: 18 },
        ],
      },
    },
  },
  {
    data: {
      Uuid: "3",
      userName: "myDiddy",
      accountAge: new Date("2025-01-01"),
      genetics: { gene: "123", traits: [Trait.STRONG, Trait.FREE_SPIRIT] },
      class: {
        skills: [
          { name: SkillName.Attack, description: "Attack", level: 10 },
          { name: SkillName.Defense, description: "Defense", level: 10 },
          { name: SkillName.Magic, description: "Magic", level: 10 },
          { name: SkillName.Ranged, description: "Ranged", level: 10 },
        ],
      },
    },
  },
];

const getSkillLevel = (skill: Skill) => {
  return skill.level;
};
const level10Accounts = exampleBuild.filter((element) => getSkillLevel(element.data.class.skills[0]) >= 10);

console.log(exampleBuild);
console.log("Accounts with level 10 skills:", level10Accounts);
