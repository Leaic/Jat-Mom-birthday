import { useState } from "react";

function Form({showForm, setShowForm}){

    const whishes = {name:"", whish:""}
    const [formData, setformData] = useState(whishes);

    function handleChange(e) {
        const {name, value} = e.target
        setformData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        console.log(formData)
    }

    return <form className="w-full flex flex-col mt-4" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre nom</label>
        <input type="text" id="name" name="name"
            className="block mb-4 w-full h-[2em] text-lg text-gray-900 border border-green-100 rounded-lg bg-gray-50 focus:outline-green-300" 
            value={whishes.name} onChange={handleChange} required={true} placeholder="Votre nom"
        />
        
        <label htmlFor="whish" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre souhait</label>
        <input id = "name" name="whish" value={whishes.whish} onChange={handleChange} 
            required={true} minLength={20} placeholder="Votre Souhait"
            className="block mb-4 w-full h-[2em] text-lg text-gray-900 border border-green-100 rounded-lg bg-gray-50 focus:outline-green-300" 
        />
        
        <div className="flex flex-row justify-between w-full">
            <button className="bg-green-400 rounded-xl p-1 font-bold">Envoyer</button>
            <button disabled={!showForm} onClick={() => {setShowForm(false)}}>quitter</button>
        </div>
    </form>
}

export default Form;