const Sequelize = require('sequelize');
const { STRING, UUID, UUIDDV4 } = Sequelize;

const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/users_stories_reviews_db')

const uuidDefinition = {
  type: UUID,
  primaryKey: true,
  defaultValue: UUIDV4
}
 
const User = conn.define('user', {
  id: uuidDefinition,
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: Sequelize.STRING,
  allowNull: false
}
});
const Story = conn.define('story', {
  id: uuidDefinition
});
const Review = conn.define('story', {
  id: uuidDefinition
});

Story.belongsTo(User, {as: 'author'});
User.hasMany(Story, {foreignKey: 'authorId'});

Review.belongsTo(User, { as: 'reviewer' });
Review.belongsTo(Story);

Story.hasMany(Review);
User.hasMany(Review, {foreignKey: 'reviewerId'});


const syncAndSee = async() => {
conn.sync({force: true});
};


syncAndSeed()
  .then(()=> console.log('success');
  .catch(ex => console.log('ex');


