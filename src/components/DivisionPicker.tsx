// "Which Division am I in?": a Parent taps their child's grade and sees which Division they'll compete in.
// It reads the Divisions from the Math Competition's data file, so it updates itself every year.
import { useState } from 'react';
import './DivisionPicker.css';

interface Division {
  name: string;
  // e.g. "Grades 1–2". Divisions without grades are left out of the picker.
  grades?: string;
}

interface Props {
  divisions: Division[];
}

// "Grades 1–2" becomes [1, 2]; "Grade 3" becomes [3].
function gradeRange(grades?: string): number[] {
  const numbers = (grades?.match(/\d+/g) ?? []).map(Number);
  if (numbers.length === 0) return [];
  const [low, high = low] = numbers;
  return Array.from({ length: high - low + 1 }, (_, index) => low + index);
}

const ordinal = (n: number) => `${n}${n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th'}`;

export default function DivisionPicker({ divisions }: Props) {
  const [grade, setGrade] = useState<number | null>(null);

  const byGrade = divisions.flatMap((division) => gradeRange(division.grades).map((g) => ({ grade: g, division })));
  if (byGrade.length === 0) return null;

  const match = byGrade.find((entry) => entry.grade === grade);

  return (
    <div className="division-picker">
      <p className="picker-question" id="picker-question">
        Which Division is my child in?
      </p>
      <div className="picker-grades" role="group" aria-labelledby="picker-question">
        {byGrade.map(({ grade: g }) => (
          <button key={g} type="button" aria-pressed={grade === g} onClick={() => setGrade(g)}>
            {ordinal(g)} grade
          </button>
        ))}
      </div>
      <p className="picker-answer" aria-live="polite">
        {match ? (
          <>
            <strong>{match.division.name}.</strong> Your {ordinal(match.grade)} grader competes against other students in{' '}
            {match.division.grades?.toLowerCase()}.
          </>
        ) : (
          'Tap a grade to find out.'
        )}
      </p>
    </div>
  );
}
