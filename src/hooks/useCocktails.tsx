import axios from "axios";
import { drink } from "../Pages/Results";

interface useFetchDataProps {
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setData: React.Dispatch<React.SetStateAction<drink[]>>,
    ingredient: string | null,
}


export async function usefetchData({setLoading, setData, ingredient}:useFetchDataProps){

        setLoading(true);

        const options = {
            method: 'GET',
            url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
            params: {i: ingredient},
            headers: {
              'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
              'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            }
          };

        try {

            const response = await axios.request(options);
            response.data.drinks == "None Found" ? setData([]): setData(response.data.drinks);

            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
}