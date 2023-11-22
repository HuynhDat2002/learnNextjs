
import axios from 'axios';
import { CarProps, FilterProps } from '@/types';
import { manufacturers } from '@/constants';

export async function fetchCars(filters:FilterProps){
    const {manufacturer,year,model,limit,fuel}= filters;
    const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {
        make: `${manufacturer}`,
        year:`${year}`,
        model:`${model}`,
        limit:`${limit}`,
        fuel_type:`${fuel}`
      },
      headers: {
        'X-RapidAPI-Key': '7bb610be56msh8901a77c80fcb1ap17f13ajsncb3b72b0b097',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
        
    } catch (error) {
        console.error(error);
    }
}

export const calculateCarRent = (year: number, cityMpg: number):number=>{
    // Constants for calculation
    const basePricePerDay=50;  // Base rate for car rent
    const mileageFactor = 0.1;  // Penalty for each year of age
    const ageFactor = 0.05;  // Bonus for higher city miles per gallon

    const mileageRate=cityMpg*mileageFactor;
    const ageRate=(new Date().getFullYear()-year)*ageFactor;

    const rentalRatePerDay=basePricePerDay+mileageFactor+ageRate;
    return Math.round(rentalRatePerDay);
}
  

