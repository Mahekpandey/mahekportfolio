import { ReadingProgress } from "../components/ui/ReadingProgress";

export default function PapersLayout({ children }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
