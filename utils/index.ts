import { CarGetAxios, FilterProps } from '@/types';
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};


export async function getCars(filters:FilterProps) {
  const {manufacturer, year, model, limit, fuel, } = filters
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?&make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`;

  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1de4c4b8efmsh3f83e0eb00a493fp131323jsnc6bd49cf4a51',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

	const response = await fetch(url, options);
	const result = await response.json();

	return result
}





export const generateCarImageUrl = (car: CarGetAxios, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);
  return `${url}`;
} 


export const updateSearchParams = (title: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  if(title) {
    searchParams.set(title, value)
  } else {
    searchParams.delete(title)
  }
 
   const newPathName = `${window.location.pathname}?${searchParams.toString()}`
   return newPathName
}

