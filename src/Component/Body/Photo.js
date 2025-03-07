import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Photo({showForm, setShowForm}) {

    let image = [
        '/Image/Dessin.png',
        '/Image/Fichier 2@4x.png',
        '/Image/Jat-logo-3.svg',
        '/Image/logo192.png',
        '/logo512.png'
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % image.length);
        }, 3000);

        return () => clearInterval(interval);
    });

    return(
        <>
            <div
                className="h-[30em] w-[90%] max-w-[500px]
                border-2 border-green-200 flex items-center overflow-hidden bg-cover bg-center bg-no-repeat rounded-md shadow drop-shadow-lg"
            >
                <motion.img
                key={index}
                src={image[index]}
                alt={`Image ${index}`}
                className="h-full w-full object-fill"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className="font-bold">Souhaitez un meilleur voeux à PASCALINE</p>
                <button className="bg-green-400 rounded-xl p-2 font-bold" disabled={showForm} onClick={() => {setShowForm(true)}}>Ajouter un voeux</button>
            </div>
        </>
    )
}

export default Photo;