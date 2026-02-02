type Props = {
  current: number;
  total: number;
};

export const QuestionCounter = ({ current, total }: Props) => {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-xs mx-auto mb-6">
      <div className="flex justify-between items-end mb-1 px-2">
        <span className="text-purple-900 font-black text-lg uppercase tracking-wider">
          Kysymys
        </span>
        <span className="text-2xl font-black text-purple-600">
          {current}
          <span className="text-purple-300 mx-1">/</span>
          {total}
        </span>
      </div>
      <div className="h-4 w-full bg-purple-100 rounded-full border-2 border-purple-900 overflow-hidden p-[2px]">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all duration-500 ease-out border-b-2 border-yellow-600"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
