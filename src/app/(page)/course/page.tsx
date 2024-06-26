import CourseCard from "./components/course-card";
import CourseCategory from "./components/course-category";
import MyCourse from "./components/my-course";

export default function CoursePage() {
  const count = 10;
  const cards = Array.from({ length: count }, (_, index) => index);
  return (
    <div className="flex flex-col w-full gap-24">
      <div className="flex flex-col gap-12">
        <h1 className="text-HB24">한눈에 보는 나의 강의</h1>
        <div className="scroll grid grid-rows-1 grid-flow-col gap-4 overflow-x-auto pb-6 px-1">
          {cards.map((_, index) => (
            <MyCourse key={index} />
          ))}
        </div>
      </div>

      <CourseCategory />
      <div className="flex flex-col gap-12">
        <h1 className="text-HB24">강의 둘러보기</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((_, index) => (
            <div className="flex pb-4">
              <CourseCard key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
