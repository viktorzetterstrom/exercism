class Bob {
  hey(statement: string): string {
    const isScreaming = /^(?=.*[A-Z])[^a-z]+!?$/.test(statement);
    const isQuestion = /\?\s*$/.test(statement);
    const isSilence = /^\s*$/.test(statement);
    const isForceFulQuestion = isScreaming && isQuestion;

    if (isForceFulQuestion) return "Calm down, I know what I'm doing!";
    if (isScreaming) return "Whoa, chill out!";
    if (isQuestion) return "Sure.";
    if (isSilence) return "Fine. Be that way!";

    return "Whatever.";
  }
}

export default Bob;
