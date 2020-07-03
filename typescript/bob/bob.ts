class Bob {
  hey(statement: string): string {
    if (Bob.isForceFulQuestion(statement))
      return "Calm down, I know what I'm doing!";
    if (Bob.isScreaming(statement)) return "Whoa, chill out!";
    if (Bob.isQuestion(statement)) return "Sure.";
    if (Bob.isSilence(statement)) return "Fine. Be that way!";

    return "Whatever.";
  }

  static isScreaming = (statement: string): boolean =>
    /^(?=.*[A-Z])[^a-z]+!?$/.test(statement);

  static isQuestion = (statement: string): boolean => /\?\s*$/.test(statement);

  static isSilence = (statement: string): boolean => /^\s*$/.test(statement);

  static isForceFulQuestion = (statement: string): boolean =>
    Bob.isScreaming(statement) && Bob.isQuestion(statement);
}

export default Bob;
