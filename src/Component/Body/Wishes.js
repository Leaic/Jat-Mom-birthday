import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Whishes(){

    const wishes = [
        {
            "key": 0,
            'name': "Erica",
            'message': "Tout mes voeux de bonheur"
        },
        {
            "key": 2,
            'name': "Flavia",
            'message': "Tout mes voeux de bonheur !!!"
        }
    ]

    const [currentWishIndex, setCurrentWishIndex] = useState(0);

  useEffect(() => {
    // Fonction pour calculer le délai basé sur la longueur du message
    const getIntervalTime = () => {
      const currentMessage = wishes[currentWishIndex].message;

      return currentMessage.length >= 500 ? 10000 : currentMessage.length > 200 ? 5000 : 3000;
    };
  
    const interval = setInterval(() => {
      setCurrentWishIndex((prevIndex) => (prevIndex + 1) % wishes.length);
    }, getIntervalTime());
  
    return () => clearInterval(interval); // Nettoyer l'intervalle au démontage du composant
  }, [currentWishIndex, wishes, wishes.length]);

  return (
    <div
        className="h-[34em] w-[90%] max-w-[500px]
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
        <div className="text-center">
          <h3 className="font-bold text-lg">{wishes[currentWishIndex].name}</h3>
          <p className="mt-2">{wishes[currentWishIndex].message}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Whishes;