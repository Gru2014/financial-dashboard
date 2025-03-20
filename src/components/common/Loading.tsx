interface LoadingProps {
  message?: string;
  className?: string;
}

export default function Loading({ message = "Loading...", className = "" }: LoadingProps) {
  return (
    <div className={`flex flex-col items-center w-full h-full justify-center p-4 ${className}`}>
      <div className="w-12 h-12 rounded-full border-4 border-gray-200">
        <div className="w-12 h-12 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
      </div>
      {message && (
        <p className="mt-4 text-sm text-gray-600 font-medium">{message}</p>
      )}
    </div>
  );
}
