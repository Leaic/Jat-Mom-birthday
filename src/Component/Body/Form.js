import { useState } from "react";

function Form({showForm, setShowForm, setWishes, wishes}){

    const [formData, setformData] = useState({name:"", wish:""});
    const [successMessage, setSuccessMessage] = useState("");

    function isValidName(name) {
        // Vérifier que le nom contient uniquement des lettres (y compris les accents), espaces, apostrophes et tirets.
        const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
        return regex.test(name) && name.trim() !== "";
    }

    function handleChange(e) {
        const {name, value} = e.target
        setformData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newWishes = {key: wishes.length, name: formData.name, wish: formData.wish}
        
        if (newWishes.name.length >= 3 && isValidName(newWishes.name) && newWishes.wish) {
            setWishes([...wishes, newWishes])

            setformData({name:"", wish:""})
            setSuccessMessage("Pascaline vous remercie d'avance pour votre souhait")
        }

        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);

    }

    return <form className="w-full flex flex-col mt-4" onSubmit={handleSubmit}>
        {successMessage && (<div className="absolute border-2 bg-green-300 rounded-lg top-10">{successMessage}</div>)}
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
        <input type="text" id="name" name="name" value={formData.name}
            className="block p-1 mb-4 w-full h-[2em] text-lg text-gray-900 border border-green-100 rounded-lg bg-gray-50 focus:outline-green-300" 
            onChange={handleChange} required={true} placeholder="Votre nom"
        />
        
        <label htmlFor="wish" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre souhait</label>
        <textarea id = "wish" name="wish" value={formData.wish} onChange={handleChange} 
            required={true} minLength={20} placeholder="Votre Souhait"
            className="block p-1 mb-4 w-full h-[2em] text-lg text-gray-900 border border-green-100 rounded-lg bg-gray-50 focus:outline-green-300" 
        />
        
        <div className="flex flex-row justify-between w-full">
            <button className="bg-green-400 rounded-xl p-1 font-bold">Envoyer</button>
            <button disabled={!showForm} onClick={() => {setShowForm(false)}}>quitter</button>
        </div>
    </form>
}

export default Form;