import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
}

const AddressInputField: React.FC<Props> = ({
  type,
  placeholder,
  required = false,
  register,
  error,
}) => {
  return (
    <div className="w-full">
      <input
        {...register}
        className={`w-full px-2 py-2.5 border rounded outline-none text-gray-800 focus:border-primary transition ${
          error ? "border-red-500" : "border-gray-500/30"
        }`}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default AddressInputField;
