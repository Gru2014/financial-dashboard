import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Header from "../components/Header";
import Button from "../components/common/Button";
import { useUser } from "../contexts/UserContext";
import { FormData } from "../types/types";
import { PencilIcon } from "../components/icons";
import { Input } from "../components/common/Input";

interface SettingsProps {
  onMenuClick: () => void;
}

export default function Settings({ onMenuClick }: SettingsProps) {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "Preferences", "Security"];
  const { user, updateUser } = useUser();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset
  } = useForm<FormData>({
    defaultValues: {
      yourName: "",
      email: "",
      dateOfBirth: new Date(),
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

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      // Here you would typically upload the file to your server and update the user's avatar URL
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

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
                    src={previewUrl || user?.avatar}
                    alt="Profile"
                    className="max-w-32 max-h-32 rounded-full object-cover"
                  />
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    onClick={handleAvatarClick}
                    className="absolute bottom-0 right-0 bg-[#232323] rounded-full p-1.5 shadow-md border border-gray-200 hover:bg-[#333333] transition-colors"
                  >
                    <PencilIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="w-full">
                <div className="md:hidden space-y-4">
                  <Input label="Your Name" type="text" name="yourName" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="User Name" type="text" name="userName" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Email" type="email" name="email" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Date of Birth" type="date" name="dateOfBirth" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Password" type="password" name="password" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Present Address" type="text" name="presentAddress" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Permanent Address" type="text" name="permanentAddress" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="City" type="text" name="city" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Country" type="text" name="country" register={register} errors={errors} touchedFields={touchedFields} />
                  <Input label="Postal Code" type="text" name="postalCode" register={register} errors={errors} touchedFields={touchedFields} />
                </div>
                <div className="hidden md:grid md:grid-cols-2 gap-6">
                  <div className="space-y-4 w-full">
                    <Input label="Your Name" type="text" name="yourName" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Email" type="email" name="email" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Date of Birth" type="date" name="dateOfBirth" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Permanent Address" type="text" name="permanentAddress" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Postal Code" type="text" name="postalCode" register={register} errors={errors} touchedFields={touchedFields} />
                  </div>

                  <div className="space-y-4">
                    <Input label="User Name" type="text" name="userName" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Password" type="password" name="password" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Present Address" type="text" name="presentAddress" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="City" type="text" name="city" register={register} errors={errors} touchedFields={touchedFields} />
                    <Input label="Country" type="text" name="country" register={register} errors={errors} touchedFields={touchedFields} />
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
