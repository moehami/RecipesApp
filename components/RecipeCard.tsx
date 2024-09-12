import { Activity, ArrowRightIcon, Clock11Icon, HeartPulseIcon, Leaf, LeafIcon, LeafyGreenIcon } from 'lucide-react';
import StarRating from './DifficultyRating';
import { useRouter } from 'next/navigation';
import { RecipeType } from '@/types/types';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';

export const dynamic = 'force-dynamic' 

const RecipeCard = ({ recipe }: { recipe: RecipeType }) => {

    const router = useRouter()

    const viewRecipe = () => {
        router.push(`/recipe/${recipe.id}`);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full w-full">
            {/* Recipe Content */}
            <div className=''>
                {/* Recipe picture */}
                <div className='overflow-hidden h-[250px]'>
                    <Image 
                        src={recipe.image}
                        width={500}
                        height={200}
                        className='w-full h-full object-cover hover:scale-110 transition duration-300'
                        alt={recipe.title}
                    />
                </div>

                <div className='p-5'>
                    {/* Recipe Title */}
                    <div className=''>
                        <div className='flex flex-wrap justify-between items-center mb-2'>
                            <h2 className="text-2xl font-semibold">{recipe.title}</h2>
                            <div className='flex items-center space-x-2'>
                                {recipe.isVegan && (
                                    <div className='flex items-center' title='Vegan'>
                                        <LeafIcon strokeWidth={1.5} fill='#45a864c3'  className='w-6 h-6 text-white' />
                                        {/* <LeafIcon className='w-6 h-6 text-green-700' /> */}
                                    </div>
                                )}

                                {recipe.isHealthy && (
                                    <div className='flex items-center' title='Healthy'>
                                        <HeartPulseIcon strokeWidth={1.5} fill='#ef074dbc'  className='w-6 h-6 text-white' />
                                        {/* <HeartPulseIcon strokeWidth={1.5}  className='w-6 h-6 text-red-500' /> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Category */}
                    <CategoryBadge categoryName={recipe.category.name} />

                    {/* Preparation Time + difficulty */}
                    <div className='flex flex-col gap-2 mt-2'>
                        <div className='flex space-x-2 items-center'>
                            <Clock11Icon size={15} className='text-slate-500' />
                            <p className="text-sm text-gray-700"> {recipe.preparationTime} min</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            {/* <p className="text-sm text-gray-700">Difficulty</p> */}
                            <StarRating rating={recipe.difficulty} />
                        </div>
                    </div>

                    {/* Difficulty with Star Rating */}
                    <div className="flex flex-wrap gap-2 sm:gap-0 items-center mb-4">
                    </div>

                    {/* View Recipe Button */}
                    <button 
                        onClick={viewRecipe}
                        className="border border-slate-100 px-3 py-2 shadow-md hover:shadow-lg text-slate-800 font-semibold hover:text-slate-600 rounded-md transition duration-300 flex items-center space-x-2">
                        <span>View Recipe</span> <ArrowRightIcon size={15} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
