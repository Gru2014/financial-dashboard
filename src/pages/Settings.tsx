import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Header from "../components/Header";
import Button from "../components/common/Button";
import { useUser } from "../contexts/UserContext";
import { FormData } from "../types/types";
import DatePicker from "../components/common/DatePicker";
import { PencilIcon } from "../components/icons";

interface SettingsProps {
  onMenuClick: () => void;
}

export default function Settings({ onMenuClick }: SettingsProps) {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const { user, updateUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm<FormData>({
    defaultValues: {
      yourName: "",
      email: "",
      dateOfBirth: "",
      permanentAddress: "",
      postalCode: "",
      userName: "",
      password: "",
      presentAddress: "",
      city: "",
      country: "",
    }
  });

  useEffect(() => {
    if (user) {
      reset({
        yourName: user.yourName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        permanentAddress: user.permanentAddress,
        postalCode: user.postalCode,
        userName: user.userName,
        password: user.password,
        presentAddress: user.presentAddress,
        city: user.city,
        country: user.country,
      });
    }
  }, [user, reset]);

  const onSubmit = (data: FormData) => {
    updateUser(data);
  };

  const renderInput = (
    label: string,
    name: keyof FormData,
    type: string = "text"
  ) => {
    if (name === "dateOfBirth") {
      return (
        <DatePicker
          label={label}
          {...register(name, {
            required: "Date of birth is required"
          })}
          error={errors[name]?.message}
          touched={touchedFields[name]}
        />
      );
    }

    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          type={type}
          {...register(name, {
            required: `${label} is required`,
            pattern: type === "email" ? {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            } : undefined
          })}
          className={clsx(
            "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2",
            errors[name] && touchedFields[name]
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-200 focus:ring-black/5"
          )}
        />
        {errors[name] && touchedFields[name] && (
          <p className="mt-1 text-sm text-red-500">{errors[name]?.message}</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <Header onMenuClick={onMenuClick} />
      <div className="p-6 md:ml-64">
        <div className="bg-white rounded-lg shadow-sm">
          {/* Tabs */}
          <div className="flex gap-8 border-b border-gray-200 px-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  "py-4 text-sm font-medium relative",
                  activeTab === tab
                    ? "text-black border-b-2 border-black -mb-[1px]"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "Edit Profile" && (
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:flex gap-20">
              <div className="flex md:items-start justify-center gap-4 mb-8">
                <div className="relative">
                  <img
                    src={user?.avatar}
                    alt="Profile"
                    className="rounded-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border border-gray-200"
                  >
                    <PencilIcon className="w-4 h-4" color="#B1B1B1" />
                  </button>
                </div>
              </div>

              <div className="w-full">
                <div className="md:hidden space-y-4">
                  {renderInput("Your Name", "yourName")}
                  {renderInput("User Name", "userName")}
                  {renderInput("Email", "email", "email")}
                  {renderInput("Password", "password", "password")}
                  {renderInput("Date of Birth", "dateOfBirth")}
                  {renderInput("Present Address", "presentAddress")}
                  {renderInput("Permanent Address", "permanentAddress")}
                  {renderInput("City", "city")}
                  {renderInput("Country", "country")}
                  {renderInput("Postal Code", "postalCode")}
                </div>
                <div className="hidden md:grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 w-full">
                    {renderInput("Your Name", "yourName")}
                    {renderInput("Email", "email", "email")}
                    {renderInput("Date of Birth", "dateOfBirth")}
                    {renderInput("Permanent Address", "permanentAddress")}
                    {renderInput("Postal Code", "postalCode")}
                  </div>

                  <div className="space-y-4">
                    {renderInput("User Name", "userName")}
                    {renderInput("Password", "password", "password")}
                    {renderInput("Present Address", "presentAddress")}
                    {renderInput("City", "city")}
                    {renderInput("Country", "country")}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
