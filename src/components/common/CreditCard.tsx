import clsx from "clsx";
import { BlackCardIcon, WhiteCardIcon } from "../icons";

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  cardNumber: string;
  validThru: string;
  variant?: "dark" | "light";
}

export default function CreditCard({
  balance,
  cardHolder,
  cardNumber,
  validThru,
  variant = "dark",
}: CreditCardProps) {
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(balance);

  const firstFour = cardNumber.slice(0, 4);
  const lastFour = cardNumber.slice(-4);
  const maskedCardNumber = `${firstFour} **** **** ${lastFour}`;

  return (
    <div
      className={clsx(
        "relative rounded-[28px] h-[240px] w-full min-w-[360px]",
        variant === "dark"
          ? "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white"
          : "bg-white text-[#1F2937] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      )}
    >
      <div className="h-full">
        <div className="flex flex-col gap-8 p-7">
          <div>
            <p
              className={clsx(
                "text-sm font-normal mb-1",
                variant === "dark" ? "text-gray-200" : "text-[#6B7280]"
              )}
            >
              Balance
            </p>
            <p className="text-xl font-normal leading-none">
              {formattedBalance}
            </p>
          </div>
          <div className="flex gap-20">
            <div>
              <p
                className={clsx(
                  "text-xs mb-1 tracking-wider",
                  variant === "dark" ? "text-gray-300" : "text-[#6B7280]"
                )}
              >
                CARD HOLDER
              </p>
              <p className="text-base font-light">{cardHolder}</p>
            </div>
            <div>
              <p
                className={clsx(
                  "text-xs mb-1.5 tracking-wider",
                  variant === "dark" ? "text-gray-300" : "text-[#6B7280]"
                )}
              >
                VALID THRU
              </p>
              <p className="text-base font-light">{validThru}</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#ffffff]/20 to-[#ffffff]/0 relative rounded-b-[28px] p-4">
          <p className="text-[22px] tracking-[0.05em] font-light">
            {maskedCardNumber}
          </p>
          <div className="absolute bottom-5 right-7">
            <div className="flex">
              <div
                className={clsx(
                  "w-[30px] h-[30px] rounded-full",
                  variant === "dark" ? "bg-white/60" : "bg-[#374151]/60"
                )}
              ></div>
              <div
                className={clsx(
                  "w-[30px] h-[30px] rounded-full -ml-[15px]",
                  variant === "dark" ? "bg-white/60" : "bg-[#374151]/60"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-7 right-7">
        {variant === "dark" ? <WhiteCardIcon /> : <BlackCardIcon />}
      </div>
    </div>
  );
}
