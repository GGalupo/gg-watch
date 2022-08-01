export interface Lesson {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
}
