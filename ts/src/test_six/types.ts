/**
 * 📝@author: { @Override } | @since: 20250621 @13:35
 * 👀@see <a href="https://github.com/TuringProblem/">GitHub Profile</a>
 **/
interface SkillReader {
  getLevel: (skill: Skill) => number;
  getName: (skill: Skill) => SkillName;
}
interface SkillValidator {
  hasMinimumLevel: (skill: Skill, minLevel: number) => boolean;
  isMaxLevel: (skill: Skill) => boolean;
}

interface AccountFilter<T> {
  filter: (accounts: T[], predicate: (account: T) => boolean) => T[];
}

interface SkillAnalyzer {
  hasAnySkillAtLevel: (skills: Skill[], level: number) => boolean;
  hasAllSkillAtLevel: (skills: Skill[], level: number) => boolean;
  getHighestSkillLevel: (skills: Skill[]) => number;
  getSkillByName: (skills: Skill[], name: SkillName) => Skill | undefined;
}

enum SkillName {
  Attack = "ATTACK",
  Defense = "DEFENSE",
  Magic = "MAGIC",
  Ranged = "RANGED",
}
enum Trait {
  STRONG = "STRONG",
  FREE_SPIRIT = "FREE_SPIRIT",
  SMART = "SMART",
  AGILE = "AGILE",
  LUCKY = "LUCKY",
  CHARISMATIC = "CHARISMATIC",
}

type Skill = {
  name: SkillName;
  description: string;
  level: number;
};
type Genetics = {
  gene: string;
  traits: Trait[];
};
type Class = {
  skills: Skill[];
};

type AccountStates = {
  Uuid: string;
  userName: string;
  accountAge: Date;
  genetics: Genetics;
  class: Class;
};

type DataExample = {
  data: AccountStates;
};

interface BuildAccount {
  handle: (element: DataExample) => DataExample;
}

export { SkillName, Trait, Skill, Genetics, Class, AccountStates, DataExample, BuildAccount };

