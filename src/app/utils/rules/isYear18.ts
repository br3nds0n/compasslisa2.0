function isYear18(dateOfBirth: Date) {
  const DATE: Date = new Date();
  DATE.setFullYear(DATE.getFullYear() - 18);

  const RESULT: boolean = dateOfBirth <= DATE;

  return RESULT;
}

export default isYear18;
