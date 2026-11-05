import { ReadingProgress } from "../components/ui/ReadingProgress";

export default function BlogLayout({ children }) {
  return (
    <>
      <ReadingProgress />
      {children}
    </>
  );
}
