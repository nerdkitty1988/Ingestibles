"""empty message

Revision ID: 3a0a78d1114b
Revises: eeb66aba3dd5
Create Date: 2021-10-11 10:26:41.702445

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3a0a78d1114b'
down_revision = 'eeb66aba3dd5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('recipeId', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'comments', 'recipes', ['recipeId'], ['id'])
    op.add_column('ingredients', sa.Column('recipeId', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'ingredients', 'recipes', ['recipeId'], ['id'])
    op.add_column('instructions', sa.Column('recipeId', sa.Integer(), nullable=False))
    op.create_foreign_key(None, 'instructions', 'recipes', ['recipeId'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'instructions', type_='foreignkey')
    op.drop_column('instructions', 'recipeId')
    op.drop_constraint(None, 'ingredients', type_='foreignkey')
    op.drop_column('ingredients', 'recipeId')
    op.drop_constraint(None, 'comments', type_='foreignkey')
    op.drop_column('comments', 'recipeId')
    # ### end Alembic commands ###
