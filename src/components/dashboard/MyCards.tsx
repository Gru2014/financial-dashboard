import CreditCard from '../common/CreditCard';
import { useFetchCards } from '../../hooks/useFetchData';
import Loading from '../common/Loading';
import { useUser } from '../../contexts/UserContext';
import Button from '../common/Button';

export default function MyCards() {
  const { user } = useUser();
  const { cards, isLoading, error } = useFetchCards(user?.id || '');

  if (error) return (
    <div className="flex items-center justify-center min-h-[200px] text-red-500">
      Error: {error.message}
    </div>
  );

  return (
    <div className="flex flex-col gap-6 rounded-2xl w-full lg:w-2/3">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Cards</h2>
        <Button variant="text" size="sm">See All</Button>
      </div>
      {isLoading && <Loading className="min-h-[200px] justify-center" />}
      <div className="flex gap-6 overflow-x-auto overflow-y-hidden lg:overflow-hidden">
        {cards.map(card => (
          <CreditCard 
            key={card.id}
            balance={card.balance}
            cardNumber={card.cardNumber}
            cardHolder={card.cardHolder}
            validThru={card.validThru}
            variant={card.variant as "dark" | "light"}
          />
        ))}
      </div>
    </div>
  );
} 