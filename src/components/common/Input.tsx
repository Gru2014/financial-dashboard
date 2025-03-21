import clsx from "clsx";
import { UseFormRegister, FieldErrors,  } from "react-hook-form";
import { FormData } from "../../types/types";

interface InputProps {
  label: string;
  type: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  touchedFields: Record<string, boolean>;
}

export function Input({ label, type, name, register, errors, touchedFields }: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(name, {
          required: `${label} is required`,
          pattern:
            type === "email"
              ? {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }
              : undefined,
        })}
        className={clsx(
          "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2",
          errors[name] && touchedFields[name]
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-200 focus:ring-black/5"
        )}
      />
      {errors[name] && touchedFields[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]?.message?.toString()}</p>
      )}
    </div>
  );
}
