import { gql, useQuery } from "@apollo/client";

import { Lesson } from "..";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      availableAt
      lessonType
      title
      slug
    }
  }
`;

export const Sidebar = () => {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <aside className="w-[22rem] bg-gray-700 p-6 border-l border-gray-600">
      <h3 className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Lessons schedule
      </h3>

      <div className="flex flex-col gap-8">
        <Lesson
          title="Lesson 01"
          slug="lesson-1"
          availableAt={new Date()}
          type="live"
        />
        {/* <Lesson />
        <Lesson />
        <Lesson />
        <Lesson />
        <Lesson /> */}
      </div>
    </aside>
  );
};
