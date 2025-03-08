import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Wishes({wishes}){

  const [currentWishIndex, setCurrentWishIndex] = useState(0);
  console.log('WISHES CURRENT Wihes ========================== ', wishes)


  useEffect(() => {
    // Fonction pour calculer le délai basé sur la longueur du message

    const getIntervalTime = () => {

      const currentMessage = wishes[currentWishIndex].wish;

      return currentMessage.length >= 500 ? 10000 : currentMessage.length > 200 ? 5000 : 3000;
    };
  
    const interval = setInterval(() => {
      // Ajouter 1 a l'index actuel (prevIndex +1) et revenir a l'index initiale si la longueur du tableau est atteint (% wishes.length)
      setCurrentWishIndex((prevIndex) => (prevIndex + 1) % wishes.length);
    }, getIntervalTime());
  
    return () => clearInterval(interval); // Nettoyer l'intervalle au démontage du composant
  }, [currentWishIndex, wishes, wishes.length]);

  console.log("WISHES CURRENT INDEX NAME ====================== ", currentWishIndex, wishes[currentWishIndex])

  return (
    <div
        className="h-[35em] w-[90%] max-w-[500px]
        border-2 border-green-200 flex items-center overflow-hidden bg-cover bg-center bg-no-repeat rounded-md shadow drop-shadow-lg"
    >
      <motion.div
        key={wishes[currentWishIndex].key}
        className="flex justify-center items-center border-2 p-5 shadow-lg w-full h-full bg-gray-100"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        {wishes[currentWishIndex].name !== "" && wishes[currentWishIndex].wish !== "" && 
          <div className="text-center">
            <h3 className="font-bold text-sm">{wishes[currentWishIndex].name}</h3>
            <p className="mt-2 text-xl">{wishes[currentWishIndex].wish}</p>
          </div>
        }
      </motion.div>
    </div>
  );
}

export default Wishes;