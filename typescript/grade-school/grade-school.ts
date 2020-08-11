type Student = string;

export default class GradeSchool {
  private roster = new Map<string, Student[]>();

  studentRoster(): Map<string, Student[]> {
    return this.rosterCopy;
  }

  addStudent(name: Student, grade: number): void {
    const studentsInGrade = this.studentsInGrade(grade);
    const newStudentsInGradeSorted = [...studentsInGrade, name].sort();
    this.roster.set(grade.toString(), newStudentsInGradeSorted);
  }

  studentsInGrade(grade: number): Student[] {
    const studentsInGrade = this.roster.get(grade.toString()) || [];
    return [...studentsInGrade];
  }

  private get rosterCopy(): Map<string, Student[]> {
    return new Map(JSON.parse(JSON.stringify(Array.from(this.roster))));
  }
}
