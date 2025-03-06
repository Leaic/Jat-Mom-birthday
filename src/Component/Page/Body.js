
import Whishes from './../Body/Wishes';
import Photo from './../Body/Photo';
import { useState } from 'react';
import Form from './../Body/Form';

export const Body = ({headerItem}) => {

  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className={`w-full h-full border-4 flex flex-col gap-2 items-center justify-center p-5`}
        style={{ backgroundImage: "url('/Image/birthday.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}
      >
        {headerItem === "photo" && <Photo setShowForm={setShowForm} showForm={showForm}/>}
        {headerItem === "voeux" && <Whishes />}
      </div>

      {showForm && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
      )}

      {headerItem === "photo" && showForm && 
      <div className={`items-center p-2 w-[90%] max-w-[450px] border-2 border-green-200 bg-white shadow-md rounded ${showForm ? `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20` : ``}`}>
          <div className="flex flex-row justify-between w-full">
              <div className="text-lg font-bold">Formulaire de Voeux</div>
              <button disabled={!showForm} onClick={() => {setShowForm(false)}}>❌</button>
          </div>
          <Form setShowForm={setShowForm} showForm={showForm}/>
      </div>}
    </div>
  );
}