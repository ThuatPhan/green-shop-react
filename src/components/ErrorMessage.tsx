interface Props {
  message: string;
}
const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
      <p className="text-2xl font-medium text-primary">{message}</p>
    </div>
  );
};

export default ErrorMessage;
