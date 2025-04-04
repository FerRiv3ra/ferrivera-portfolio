type Props = {
  className?: string;
};

export const Vercel = ({ className = 'w-10 h-10 fill-white' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="128"
      height="128"
      viewBox="0 0 128 128"
    >
      <path d="M63.984 17.184 127.964 128H0Zm0 0" />
    </svg>
  );
};
