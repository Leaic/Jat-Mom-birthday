
const Header = ({headerItem, setHeaderItem}) => {

    let headerItems = ["photo", "voeux"];

    return(
        <div className="flex flex-row justify-between bg-primary-green w-full bg-green-300">
            <div className="">
                <img src="/Jat-logo-3.svg" alt="JAT" width={50} height={50}/>
            </div>

            <div className="flex flex-row gap-2 p-2 justify-between text-center">
                {headerItems.map((item) => (
                    <button
                        key={item}
                        className={`${headerItem === item ? 'font-bold underline underline-offset-2 decoration-green-00' : ''}`}
                        onClick={() => setHeaderItem(item)} // Mise à jour du state ici
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Header