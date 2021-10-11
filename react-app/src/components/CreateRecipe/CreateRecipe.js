import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddTag from './AddTag';
import './CreateRecipe.css';

const CreateRecipe = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    
    const [title, setTitle] = useState("");
    // [this.tagName1, this.setTagName1] = useState("");
    // [this.tagName2, this.setTagName2] = useState("");
    const [tags, setTags] = useState({});
    const [tagCounter, setTagCounter] = useState(0);
    
    const [introduction, setIntroduction] = useState("");
    const [media1, setMedia1] = useState("");
    const [media2, setMedia2] = useState("");
    const [media3, setMedia3] = useState("");
    const [media4, setMedia4] = useState("");
    const [media5, setMedia5] = useState("");
    
    const [ingredientPhoto, setIngredientPhoto] = useState("");
    const [ingredients, setIngredients] = useState({});
    const [ingredientCounter, setIngredientCounter] = useState(0);
    
    const [stepTitle1, setStepTitle1] = useState("");
    const [insturction1, setInsturction1] = useState("");
    const [stepMedia1, setStepMedia1] = useState("");

    const [errors, setErrors] = useState([]);

    // require login is handled by ProtectedRoute
    // if (!sessionUser) {
    //     return (<h3 style={{ color: '#f0a04b' }}>
    //         Please login/signup to create a recipe.
    //     </h3>)
    // };
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(tags)
        console.log(ingredients)

    }
    
    // count how many tags the user would like to have
    const tagCounterClick = async (e) => {
        e.preventDefault();
        setTagCounter(tagCounter+1)
        console.log(tags)
    }

    // count how many ingredients the user would like to have
    const ingredientCounterClick = async (e) => {
        e.preventDefault();
        setIngredientCounter(ingredientCounter + 1)
        console.log(ingredients)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div className='newRecipeButtonWrapper'>
                <NavLink to='/profile' exact={true} style={{display:'block'}}>Cancel</NavLink>
                <button>Create Recipe</button>
            </div>
            <div>
                {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='newRecipeBasics'>
                <div className='newRecipeTitle'>
                    <h4>Recipe Basics</h4>
                    <label>Recipe Title</label>
                    <input
                        className='listingInput'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                        // required  
                    />
                </div>
                <div>
                    <label>Tag #1 </label>
                    <input
                        className='listingInput'
                        type="text"
                        key = 'tag1'
                        onChange={(e) => setTags({...tags, 'tag1': e.target.value})}
                        placeholder='Tag'
                    />
                    {/* per number of tags, render the tag input component */}
                    {[...Array(tagCounter)].map((el, i) => (<div key={`tag${i + 2}`}>
                            <label>Tag #{i + 2} </label>
                            <input
                                className='listingInput'
                                type="text"                               
                                onChange={(e) => setTags(tags=>{
                                    tags[`tag${i+2}`] = e.target.value
                                    return tags
                                })}
                                placeholder='Tag'
                            />
                        </div>))}
                    <button onClick={tagCounterClick}>Add New Tag</button>
            
                </div>
            </div>
            
            <div className='newReceipeIntroWrapper'>
              <div className='newReceipeIntro'>
                <h4>Introduction</h4>
                <textarea
                    className='listingInput'
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    placeholder='Briefly describe what you made.'
                    //required
                />
              </div>
             <div>
              <div>
                <label>Photo/Video #1 </label>
                    <input
                        className='listingInput'
                        type="text"
                        value={media1}
                        onChange={(e) => setMedia1(e.target.value)}
                        placeholder='Include 1-5 photo and/or video about your finished dish'
                    // required  
                    />
              </div>
              <div>
                <label>Photo/Video #2 </label>
                <input
                    className='listingInput'
                    type="text"
                    value={media2}
                    onChange={(e) => setMedia2(e.target.value)}
                    placeholder='Include 1-5 photo and/or video about your finished dish'
                    // required  
                />
              </div>
              <div>
                <label>Photo/Video #3 </label>
                <input
                    className='listingInput'
                    type="text"
                    value={media3}
                    onChange={(e) => setMedia3(e.target.value)}
                    placeholder='Include 1-5 photo and/or video about your finished dish'
                // required  
                />
              </div>

             <div>
                <label>Photo/Video #4 </label>
                <input
                    className='listingInput'
                    type="text"
                    value={media4}
                    onChange={(e) => setMedia4(e.target.value)}
                    placeholder='Include 1-5 photo and/or video about your finished dish'
                
                />
              </div>
              <div>
                <label>Photo/Video #5 </label>
                <input
                    className='listingInput'
                    type="text"
                    value={media5}
                    onChange={(e) => setMedia5(e.target.value)}
                    placeholder='Include 1-5 photo and/or video about your finished dish'
            
                />
              </div>
             </div>
            </div>

             <div className='newRecipeIngredientWrapper'>
                <h4>Ingredients</h4>
                <div>
                <label>Ingredient Photo </label>
                <input
                    className='listingInput'
                    type="text"
                    value={ingredientPhoto}
                    onChange={(e) => setIngredientPhoto(e.target.value)}
                    placeholder='ingredient photo for your dish'             
                />
                </div>
                <div>
                <label>Ingredient #1 </label>
                <input
                    className='listingInput'
                    type="text"
                    key={`ingredient1`}
                    onChange={(e) => setIngredients({...ingredients, 'ingredient1': e.target.value})}
                    placeholder='ingredients for your dish'             
                />
                </div>

                {[...Array(ingredientCounter)].map((el, i) => (<div key={`ingredient${i + 2}`}>
                    <label>Ingredient #{i + 2} </label>
                    <input
                        className='listingInput'
                        type="text"
                        onChange={(e) => setIngredients(ingredients => {
                        ingredients[`ingredient${i + 2}`] = e.target.value
                        return ingredients
                        })}
                        placeholder='ingredients for your dish'
                    />
                </div>))}
                <button onClick={ingredientCounterClick}>Add New Ingredient</button>
            </div>

            <div>
                <h2>Step #1</h2>
                <input
                    className='listingInput'
                    type="text"
                    value={stepTitle1}
                    onChange={(e) => setStepTitle1(e.target.value)}
                    placeholder='Enter step title'
          
                />
                <textarea
                    className='listingInput'
                    value={insturction1}
                    onChange={(e) => setInsturction1(e.target.value)}
                    placeholder='Write a detailed description of this step'
   
                />
                <input
                    className='listingInput'
                    type="text"
                    value={stepMedia1}
                    onChange={(e) => setStepMedia1(e.target.value)}
                    placeholder='Photo for this step'

                />
            </div>

            

               
        </form>

    );
}

export default CreateRecipe;