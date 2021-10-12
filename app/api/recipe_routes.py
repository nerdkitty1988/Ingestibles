from flask import Blueprint, jsonify, session, request
from app.models import Recipe, User, Like, db
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import createRecipeForm


recipe_routes = Blueprint('recipes', __name__)


@recipe_routes.route('/')
def recipes():
    recipes = Recipe.query.all()
    return {'recipes': [recipe.to_dict() for recipe in recipes]}


@recipe_routes.route('/my_plate/<int:id>')
@login_required
def user_recipes(id):
    created_recipes = Recipe.query.join(User).filter(User.id == id).all()
    print(created_recipes)
    liked_recipes = Recipe.query.join(Like).filter(Like.userId == id).all()
    print(liked_recipes)
    return {'created': [created_recipe.to_dict() for created_recipe in created_recipes], 'liked': [liked_recipe.to_dict() for liked_recipe in liked_recipes]}














# create new recipe
@recipe_routes.route('/', methods=['POST'])
@login_required
def create_recipe():
    formRecipe = createRecipeForm()
    formRecipe['csrf_token'].data = request.cookies['csrf_token']
    if formRecipe.validate_on_submit():
        recipe = Recipe(
            authorId=formRecipe.data['authorId'],
            title=formRecipe.data['title'],
            description=formRecipe.data['description'],
            ingredientPhoto=formRecipe.data['ingredientPhoto']
        )
        db.session.add(recipe)
        db.session.commit()
        return recipe.to_dict()
    return {'errors': validation_errors_to_error_messages(formRecipe.errors)}, 401
