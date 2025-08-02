interface FrameCellProps {
  score: Array<number>;
}

export const FrameCell = ({ score }: FrameCellProps) => {
  return (
    <div>
      <div>First</div>
      <div>Second</div>
      <div>Total</div>
    </div>
  );
};
