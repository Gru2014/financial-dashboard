import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  touched?: boolean;
}

export default function DatePicker({
  label,
  error,
  touched,
  className,
  ...props
}: DatePickerProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="date"
          className={clsx(
            "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none",
            error && touched
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-200 focus:ring-black/5",
            "calendar:bg-white calendar:border calendar:rounded-lg calendar:shadow-lg",
            "calendar:p-2 calendar:border-gray-200",
            className
          )}
          {...props}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
      {error && touched && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
} 